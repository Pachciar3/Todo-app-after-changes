/// <reference types="cypress" />

context('Test task collapsing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/todo')
  })

  // https://on.cypress.io/interacting-with-elements

  it('should view Paper', () => {
    const button = cy.get(':nth-child(1) > .MuiListItem-root')
    button.click();
    cy.get('.MuiCollapse-wrapperInner > .MuiPaper-root');
  })
})
