/// <reference types="cypress" />
describe('login/ logout test', () => {
    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    })
    it('Should login with invalid password', ()=>{
        cy.fixture("invalidData").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        })
    })
    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text','Login and/or password are wrong')
    })
    it('Should login with valid password', ()=>{
        cy.fixture("zeroWebApp").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        })
    })
    it('Should logout', () => {
        cy.get('.dropdown').eq(1).click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')
    })
})