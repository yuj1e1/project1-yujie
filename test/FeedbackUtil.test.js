const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const { updateFeedback } = require('../utils/UpdateFeedbackUtil'); // Import the function for direct testing
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let baseUrl;
let feedbackEmail = "test@example.com";
let unregisteredEmail = "unregistered@example.com"; // For unregistered email testing
let invalidEmail = "invalidemail"; // Invalid email format

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
        it('should update feedback successfully', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${feedbackEmail}`)
                .send({ feedback: "update feedback 2" })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.message).to.equal('Feedback updated successfully!');
                    done();
                });
        });


        it('should return 404 for an unrecognized email', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${unregisteredEmail}`)
                .send({ feedback: 'Feedback for unregistered email' })
                .end((err, res) => {
                    expect(res).to.have.status(404); // Expecting 404 for unrecognized email
                    expect(res.body.message).to.equal('Email is unrecognized. Please enter a valid registered email.');
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
                .send({ feedback: "update feedback 2" }) // Sending the same feedback text
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.message).to.equal('No changes made to the feedback.');
                    done();
                });
        });

        it('should return 400 for an invalid email format', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${invalidEmail}`)
                .send({ feedback: "update feedback" })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Invalid email address.');
                    done();
                });
        });

        it('should return 500 for server error', (done) => {
            chai.request(baseUrl)
                .put(`/update-feedback/${feedbackEmail}`)
                .send({ feedback: "simulate-server-error" })
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body.message).to.equal('Request failed. Please check your network connection.');
                    done();
                });
        });

        it('should return an error when the feedback file is missing', async () => {
            const result = await updateFeedback('test@example.com', 'Updated Feedback', null);
            expect(result).to.have.property('error', 'Filename is missing. Operation could not be completed.');
        });

        it('should return an error if the email is not found', async () => {
            const result = await updateFeedback('unregistered@example.com', 'Updated Feedback', 'utils/feedback.json');
            expect(result).to.have.property('error', 'Email not found in the database. Unable to update feedback.');
        });
    });
});
