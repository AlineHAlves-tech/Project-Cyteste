import '../support/login-commands.js'

describe('Perfil', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.login('aline@gmail.com', '12Al34');
    });

    it('Deve identificar o ícone de perfil e clicar no botão de visualizar perfil para preenhcer o formulário de perfil', () => {
        cy.get('.header__user').should('be.visible');
        cy.get('.header__user').click();
        cy.get('a.button').click();
        cy.get('#nome').type('Aline');
        cy.get('#telefone').type('8599990000');
        cy.get('#cidade').type('Russas/CE');
        cy.get('#sobre').type('Estou a procura de um pet para adotar.');
        cy.get('[data-test="submit-button"]').click();
    })
})