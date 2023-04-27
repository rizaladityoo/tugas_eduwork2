/// <reference types="cypress" />
describe('My First Test', () => {
    it('Should visit zero.webappsecurity.com', ()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    }) 
    it('Should login', ()=>{
        cy.fixture("zeroWebApp").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('.icon-user').should('be.visible')
        })
    })
    it('Should pay Bills', () => {
        cy.get("#pay_bills_tab").click()
        cy.fixture('payBill').then(data =>  {
            const amount = data.amount
            const date = data.date
            const desc = data.desc

            cy.PayBills(amount, date, desc)
        })
    })








})

