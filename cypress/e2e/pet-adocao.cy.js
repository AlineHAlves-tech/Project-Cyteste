import '../support/login-commands.js'
import '../support/speed-commands.js'

describe('Adoção', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    });

    it('Deve preencher os campos de login corretamente e verificar todos os pets fêmeas', () => {
        cy.login('aline@gmail.com', '12Al34');
        cy.slowDown(3000);
        cy.contains('Felícia').should('be.visible');
        cy.contains('Fiona').should('be.visible');
        cy.contains('Lua').should('be.visible');
        cy.contains('Amora').should('be.visible');
        cy.contains('Zelda').should('be.visible');
    });

    it('Deve preencher os campos de login corretamente e verificar todos os pets machos', () => {
        cy.login('aline@gmail.com', '12Al34');
        cy.slowDown(3000);
        cy.contains('Dunga').should('be.visible');
        cy.contains('Sirius').should('be.visible');
        cy.contains('Sid').should('be.visible');
        cy.contains('Yoda').should('be.visible');
    });
});