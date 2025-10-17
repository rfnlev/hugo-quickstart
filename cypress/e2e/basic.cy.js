describe('Freie Schule Ostfriesland website', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the school name', () => {
    cy.contains('Wir sind die Freie Schule Ostfriesland!');
  })
  it('displays the hero heading', () => {
    cy.contains('Freie Schule Ostfriesland');
  })
})