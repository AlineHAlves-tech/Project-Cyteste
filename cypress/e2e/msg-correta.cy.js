import '../support/login-commands.js.js'

describe('Falar com o Responsável', () =>{
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    });

    it('Deve identificar o item falar com responsável', () => {
        cy.login('aline@gmail.com', '12Al34');
        cy.get(':nth-child(2) > .card__contact').should('be.visible');
        cy.get(':nth-child(2) > .card__contact').click();
    });

    it('Deve enviar uma mensagem para o responsável', () =>{
        cy.login('aline@gmail.com', '12Al34');
        cy.contains('Felícia').should('be.visible');
        cy.get(':nth-child(3) > .card__contact').click();
        cy.get('#name').type('Aline');
        cy.get('#phone').type('8599990000');
        cy.get('#petName').type('Felícia');
        cy.get('#msg').type('Ela é fofa, gostaria de saber se ainda está disponível?');
        cy.get('[data-test="submit-button"]').click();
    });
});

