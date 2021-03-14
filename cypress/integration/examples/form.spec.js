/// <reference types="cypress" />

context('Test small form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/todo')
  })
  it('should form displayed', () => {
    const input = cy.get('#filled-basic')
    input.type('test');
    const button = cy.get('[data-testid=small-form] > .MuiButtonBase-root')
    button.click();
    cy.get('.MuiDialog-paper');
  })

  it('should input name working', () => {
    const input = cy.get('#filled-basic')
    input.type('test');
    const button = cy.get('[data-testid=small-form] > .MuiButtonBase-root')
    button.click();
    const inputName = cy.get('#dialog-form-name');
    inputName.type('2');
    inputName.should('have.value', 'test2')

  })

  it('should input date working', () => {
    const input = cy.get('#filled-basic')
    input.type('test');
    const button = cy.get('[data-testid=small-form] > .MuiButtonBase-root')
    button.click();
    const inputName = cy.get('#dialog-dorm-date')
    inputName.type('2017-06-01T08:30');
    inputName.should('have.value', '2017-06-01T08:30')

  })

  it('should input description working', () => {
    const input = cy.get('#filled-basic')
    input.type('test');
    const button = cy.get('[data-testid=small-form] > .MuiButtonBase-root')
    button.click();
    const inputName = cy.get('#dialog-form-description')
    inputName.type('test');
    inputName.should('have.value', 'test')

  })

  it('should switch working', () => {
    const input = cy.get('#filled-basic')
    input.type('test');
    const button = cy.get('[data-testid=small-form] > .MuiButtonBase-root')
    button.click();
    const inputName = cy.get('#dialog-form-name');
    inputName.click();
    expect(inputName).to.have.className = "Mui-checked"

  })

  it('should form exit', () => {
    const input = cy.get('#filled-basic')
    input.type('test');
    const button = cy.get('[data-testid=small-form] > .MuiButtonBase-root')
    button.click();
    const buttonExit = cy.get('.MuiDialog-paper > .MuiPaper-root > .MuiToolbar-root > .MuiButtonBase-root')
    buttonExit.click();
    cy.get('.MuiDialog-paper').should('not.exist');
  })
})
