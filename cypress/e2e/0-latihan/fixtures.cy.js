/// <reference types="cypress" />
describe('Login test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('user.json').then((user) => {
      cy.get('[data-test=username]').type(user.username)
      cy.get('[data-test=password]').type(user.password)
      cy.get('[data-test=login-button]').click()
    })
  })
    // Add a product to the cart
  it('memasukkan barang ke keranjang dan checkout', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()


    cy.get('.shopping_cart_link').click()
    cy.get('[data-test=checkout]').click()


    cy.fixture('checkout.json').then((checkoutData) => {
      cy.get('[data-test=firstName]').type(checkoutData.firstName)
      cy.get('[data-test=lastName]').type(checkoutData.lastName)
      cy.get('[data-test=postalCode]').type(checkoutData.postalCode)
    })
    
    cy.get('[data-test=continue]').click()

    cy.get('[data-test=finish]').click()


    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header').should('be.visible')
  })



})