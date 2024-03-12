describe('template spec', () => {
  it('Aciktim', () => {
    cy.visit('http://localhost:5174/')


    cy.get('[data-cy=aciktim]').click();

    cy.get('[data-cy=name]').type('ab');
    cy.get('[data-cy=name]').should('have.value', 'ab');
    cy.contains('Lütfen 3 karakterden fazla giriniz'); 

    
    cy.get('[data-cy=name]').clear().type('abcd');
    cy.get('[data-cy=name]').should('have.value', 'abcd');
    cy.contains('Lütfen 3 karakterden fazla giriniz').should('not.exist');
  })

  it('submit form', () => {
    cy.visit('http://localhost:5174/')


    cy.get('[data-cy=aciktim]').click();
    cy.get('[data-cy=kücük]').click();

    cy.get('[data-cy=name]').clear().type('abcd');
    cy.get('[data-cy=name]').should('have.value', 'abcd');

    
    
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();
    cy.get('input[type="checkbox"]').eq(4).check();

    cy.get('[data-cy=submit]').click();

    cy.url().should("eq","http://localhost:5174/success");
    
  })
})