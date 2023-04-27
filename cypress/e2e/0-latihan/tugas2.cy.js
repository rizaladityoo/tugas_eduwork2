/// <reference types="cypress" />
describe('My First Test', () => {
        before(() => {
            cy.visit('http://zero.webappsecurity.com/login.html')
            cy.url().should('include','login.html')
            
            it('Should fill username', ()=>{
                cy.get('#user_login').clear()
                cy.get('#user_login').type('username')
            })

            it('Should fill password', () => {
                cy.get('#user_password').clear()
                cy.get('#user_password').type('password')
            })
            it('Should click checkbox', () => {
                cy.get('#user_remember_me').check({force : true})
             })  
        })


})