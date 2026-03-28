describe('Contact Form Test', () => {

    it('Fill form correctly', () => {
  
      cy.visit('https://www.infinite.com/');
  
      cy.contains('Contact').click();
      cy.url().should('include', '/contact/');
  
      // Work only inside visible form
      cy.get('form:visible').within(() => {
  
        cy.get('input[placeholder*="Full Name"]:visible')
          .type('Sunita Kunwar')
          .should('have.value', 'Sunita Kunwar');
  
        cy.get('input[placeholder*="Title"]:visible')
          .type('QA Engineer')
          .should('have.value', 'QA Engineer');
  
        cy.get('input[type="email"]:visible')
          .type('sunita.kunwar@test.com')
          .should('have.value', 'sunita.kunwar@test.com');
  
      });
  
    });
  
  });

