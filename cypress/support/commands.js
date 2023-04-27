// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()

    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.get('input[name="user_remember_me"]').check({force : true})
    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('PayBills', (amount, date, desc) => {
    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').clear()
    cy.get('#sp_date').type(date).type('{enter}')
    cy.get("#sp_description").clear()
    cy.get("#sp_description").type(desc)
    cy.get('#pay_saved_payees').click()
})