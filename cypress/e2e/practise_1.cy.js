describe ('login page test', () =>{
    it ('fill information', () =>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#name').type('Sunita Kunwar');
        cy.get('#textarea').type('write somethings');
    });
});
//sunita
