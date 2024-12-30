Cypress.Commands.add('login', (email, senha) => { 
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
});