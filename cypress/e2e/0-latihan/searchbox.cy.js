/// <reference types="cypress" />
describe('Searchbox test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('zero {enter}')
    })

    it('shpuld show seach result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.contains('Zero - Personal Banking - Loans - Credit Cards')
    })
})