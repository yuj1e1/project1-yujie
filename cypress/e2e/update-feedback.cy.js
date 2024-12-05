describe('Update Feedback Frontend with Alerts', () => {
    let baseUrl;

    // Start server before tests
    before(() => {
        cy.task('startServer').then((url) => {
            baseUrl = url;
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
            body: { feedbackText: 'Sample feedback text' },
        }).as('getFeedback');

        cy.get('#email').type('test@example.com').blur();
        cy.wait('@getFeedback');
        cy.get('#feedback').should('have.value', 'Sample feedback text');
        cy.get('#email').should('have.attr', 'readonly'); // Verify email is locked
    });

    it('should update feedback for a valid email', () => {
        cy.intercept('GET', '/feedback/test@example.com', {
            statusCode: 200,
            body: { feedbackText: 'Sample feedback text' },
        }).as('getFeedback');

        cy.intercept('PUT', '/update-feedback/test@example.com', {
            statusCode: 200,
            body: { message: 'Feedback updated successfully!' },
        }).as('updateFeedback');

        cy.get('#email').type('test@example.com').blur();
        cy.wait('@getFeedback');
        cy.get('#feedback').clear().type('Updated feedback text');
        cy.get('button').contains('Update Feedback').click();
        cy.wait('@updateFeedback');

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Feedback updated successfully!');
        });
    });

    it('should show an error for no feedback text', () => {
        cy.intercept('GET', '/feedback/test@example.com', {
            statusCode: 200,
            body: { feedbackText: 'Sample feedback text' },
        }).as('getFeedback');

        cy.get('#email').type('test@example.com').blur();
        cy.wait('@getFeedback');
        cy.get('#feedback').clear();
        cy.get('button').contains('Update Feedback').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Feedback cannot be empty. Please provide your feedback.');
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
            expect(alertText).to.equal('Invalid email address. Please provide a valid email in the format: user@example.com');
        });
    });

    it('should handle server errors gracefully', () => {
        cy.intercept('PUT', '/update-feedback/test@example.com', {
            statusCode: 500,
            body: { message: '' },
        }).as('updateFeedback');
    
        cy.get('#email').type('test@example.com').blur();
        cy.get('#feedback').clear().type('simulate-server-error');
        cy.get('button').contains('Update Feedback').click();
        cy.wait('@updateFeedback');
    
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('An unexpected error occurred while updating feedback.');
        });
    });
        

    it('should notify the user when no changes are made to the feedback', () => {
        cy.intercept('GET', '/feedback/test@example.com', {
            statusCode: 200,
            body: { feedbackText: 'Original feedback text' },
        }).as('getFeedback');

        cy.get('#email').type('test@example.com').blur();
        cy.wait('@getFeedback');
        cy.get('#feedback').clear().type('Original feedback text'); // No changes
        cy.get('button').contains('Update Feedback').click();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('No changes made to the feedback.');
        });
    });

    it('should handle server errors during feedback retrieval', () => {
        // Intercept the API request and simulate a server error
        cy.intercept('GET', '/feedback/test@example.com', {
            statusCode: 500, // Internal Server Error
            body: { message: 'An unexpected error occurred while retrieving feedback.' },
        }).as('getFeedback'); // Alias the request for waiting later
    
        // Simulate user typing a valid email and triggering the API call
        cy.get('#email').type('test@example.com').blur();
        cy.wait('@getFeedback'); // Wait for the intercepted request to complete
    
        // Check if the correct alert message is shown
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('An unexpected error occurred while retrieving feedback.');
        });
    });
    


    it('should show an error if the feedback file is missing', () => {
        cy.intercept('GET', '/feedback/test@example.com', {
            statusCode: 500,
            body: { message: 'Feedback file not found. Please contact support.' },
        }).as('getFeedback');
    
        cy.get('#email').type('test@example.com').blur();
        cy.wait('@getFeedback');
    
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Feedback file not found. Please contact support.');
        });
    });

    
});
