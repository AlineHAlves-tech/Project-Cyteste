import '../support/cadastro-commands'

describe('Página de cadastro', () =>{
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    });

    it('Fazer cadastro com sucesso no Adopet', () =>{
        cy.cadastro('Aline', 'aline@gmail.com', '12Al34', '12Al34');
    });
    
    it('Deve identificar se o title Adopet está presente no html', () =>{
        cy.get('.register > img').should('be.visible');
    });

    it('Deve identificar a frase "Quem ama adota"', () => {
        cy.contains('p', 'Quem ama adota').should('be.visible');
    });
});