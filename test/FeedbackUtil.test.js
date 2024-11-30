const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let baseUrl;
let feedbackEmail = "test@example.com";
let unregisteredEmail = "unregistered@example.com"; // For invalid email testing
let invalidEmail = "invalid-email"; // Invalid email format

// Setting up the server
describe('Feedback API', () => {
    before(async () => {
        const { address, port } = await server.address();
        baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
    });

    after(() => {
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    // Test Suite for updating feedback
    describe('PUT /update-feedback/:email', () => {
        it('should update an existing feedback successfully', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${feedbackEmail}`)
                .send({
                    feedback: "update feedback"
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.message).to.equal('Feedback updated successfully!');
                    done();
                });
        });

        it('should return 404 for an unrecognized email', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${unregisteredEmail}`)
                .send({
                    feedback: 'Feedback for unregistered email'
                })
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body.message).to.equal('No feedback found for the provided email.');
                    done();
                });
        });

        it('should return 400 when no feedback text is provided', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${feedbackEmail}`)
                .send({})
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Feedback is required!');
                    done();
                });
        });

        it('should return 200 when no changes are made to the feedback', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${feedbackEmail}`)
                .send({
                    feedback: "update feedback" // Sending the same feedback text
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.message).to.equal('No changes made to the feedback.');
                    done();
                });
        });

        it('should return 404 for an invalid email format', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${invalidEmail}`)
                .send({
                    feedback: "update feedback"
                })
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body.message).to.equal('No feedback found for the provided email.');
                    done();
                });
        });

        it('should return 500 for server error', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${feedbackEmail}`)
                .send({
                    feedback: "simulate-server-error"
                })
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body.message).to.equal('Request failed. Please check your network connection.');
                    done();
                });
        });
    });
});

