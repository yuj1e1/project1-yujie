describe('Update Feedback Frontend with Alerts', () => {
  let baseUrl;

  // Start server before tests
  before(() => {
      cy.task('startServer').then((url) => {
          baseUrl = url;
          cy.visit(baseUrl);
      });
  });

  // Stop server after all tests
  after(() => {
      cy.task('stopServer');
  });

  // Visit the update feedback page before each test
  beforeEach(() => {
      cy.visit(`${baseUrl}/updateFeedback.html`);
  });

  it('should retrieve feedback for a valid email', () => {
      cy.intercept('GET', '/feedback/test@example.com', {
          statusCode: 200,
          body: { feedbackText: 'Simulated network error feedback' },
      }).as('getFeedback');

      cy.get('#email').type('test@example.com').blur();
      cy.wait('@getFeedback');
      cy.get('#feedback').should('have.value', 'Simulated network error feedback');
  });

  it('should update feedback for a valid email', () => {
      cy.intercept('GET', '/feedback/test@example.com', {
          statusCode: 200,
          body: { feedbackText: 'Simulated network error feedback' },
      }).as('getFeedback');

      cy.intercept('PUT', '/update-feedback/test@example.com', {
          statusCode: 200,
          body: { message: 'Feedback updated successfully!' },
      }).as('updateFeedback');

      cy.get('#email').type('test@example.com').blur();
      cy.wait('@getFeedback');
      cy.get('#feedback').clear().type('Updated Feedback Text');
      cy.get('button').contains('Update Feedback').click();
      cy.wait('@updateFeedback');

      cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Feedback updated successfully!');
      });
  });

  it('should show an error for no feedback text', () => {
      cy.intercept('GET', '/feedback/test@example.com', {
          statusCode: 200,
          body: { feedbackText: 'Simulated network error feedback' },
      }).as('getFeedback');

      cy.get('#email').type('test@example.com').blur();
      cy.wait('@getFeedback');
      cy.get('#feedback').clear();
      cy.get('button').contains('Update Feedback').click();

      cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Feedback is required!');
      });
  });

  it('should handle unregistered emails', () => {
      cy.intercept('GET', '/feedback/unknown@example.com', {
          statusCode: 404,
          body: { message: 'Email is unrecognized. Please enter a valid registered email.' },
      }).as('getFeedback');

      cy.get('#email').type('unknown@example.com').blur();
      cy.wait('@getFeedback');

      cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Email is unrecognized. Please enter a valid registered email.');
      });
  });

  it('should validate invalid email formats', () => {
      cy.get('#email').type('invalid-email').blur();
      cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Invalid email address');
      });
  });

  it('should handle server errors gracefully', { defaultCommandTimeout: 10000 }, () => {
      cy.intercept('PUT', '/update-feedback/*', {
          statusCode: 500,
          body: { message: 'Request failed. Please check your network connection.' },
      }).as('updateFeedback');

      cy.get('#email').type('test@example.com').blur();
      cy.get('#feedback').clear().type('simulate-server-error', { force: true });
      cy.get('button').contains('Update Feedback').click();
      cy.wait('@updateFeedback');

      cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Request failed. Please check your network connection.');
      });
  });
});
