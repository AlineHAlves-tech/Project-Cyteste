Cypress.Commands.add('slowDown', (delay = 3000) => {
    Cypress.on('command:complete', () => {
      cy.wait(delay);
    });
  });
  