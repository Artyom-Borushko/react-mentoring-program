describe('Counter tests', () => {
  it('Counter is present with initial value', () => {
    cy.visit('/');
    const counterText = cy.get('.counter-wrapper h2');

    counterText.should('have.text', 'Counter: 123');
  });

  it('click event on "decrement" button decrements the displayed value', () => {
    cy.visit('/');
    cy.get('button').contains('Decrement').click();
    const counterText = cy.get('.counter-wrapper h2');

    counterText.should('have.text', 'Counter: 122');
  });

  it('click event on "increment" button increments the displayed value', () => {
    cy.visit('/');
    cy.get('button').contains('Increment').click();
    const counterText = cy.get('.counter-wrapper h2');

    counterText.should('have.text', 'Counter: 124');
  });
});
