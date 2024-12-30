describe('Cadastro - Adopet Alura', () => {
  const acessarPaginaDecadastro = () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/', {timeout: 450000});
    cy.contains('a', 'Cadastrar').click();
};

it('Deve preencher e enviar o formulário de cadastro', () => {
    acessarPaginaDecadastro();
    cy.get('[data-test="input-name"]').type('Aline');
    cy.get('[data-test="input-email"]').type('aline@gmail.com');
    cy.get('[data-test="input-password"]').type('12Al34');
    cy.get('[data-test="input-confirm-password"]').type('12Al34');
    cy.get('[data-test="submit-button"]').click();
  });
});

describe('Login - Adopet Alura', () => {
    const acessarPaginaDeLogin = () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/', {timeout: 450000});
      cy.contains('a', 'Fazer login').click();
  };

it('Deve preencher formulário de login', () => {
    acessarPaginaDeLogin();
    cy.get('input[name="email"]').type('aline@gmail.com');
    cy.get('input[name="password"]').type('12Al34');
    cy.contains('button', 'Entrar').click();
  });
});

describe('Ver pets para adoção', () =>{
  it('Deve acessar  a página corretamente e clicar no botão "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });

  it('Deve validar o botão clique no icone de casa', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click()
  });

  it("Visita a página de /home do AdoPet e clique no ícone de carta", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click()  
  });
  
});







