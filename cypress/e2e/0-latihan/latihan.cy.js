/// <reference types="cypress" />
describe('My First Test', () => {
    it('clicking "type" show the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()

        cy.url().should('include','https://example.cypress.io/commands/actions')

        cy.get('.action-email')
        .type('rizaladityoo@yahoo.com')
        .should('have.value','rizaladityoo@yahoo.com')
    })
})