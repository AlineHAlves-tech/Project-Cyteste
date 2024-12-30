Cypress.Commands.add('cadastro', (name, email, password, confpassword) => { 
    cy.get('[data-test="input-name"]').type(name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password);
    cy.get('[data-test="input-confirm-password"]').type(confpassword);
    cy.get('[data-test="submit-button"]').click(); 
});