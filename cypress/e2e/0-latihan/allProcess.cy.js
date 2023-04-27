// login.spec.js

describe('Login', () => {
    before(() => {        
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('should be able to login with valid credentials', () => {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('should be able to add item to cart', () => {
        // cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.contains('Add to cart').eq(0).click()
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_item').should('have.length', 1)
        cy.get('#continue-shopping').click()
    })

    it('should be able to remove item from cart', () => {
        cy.contains('Remove').eq(0).click()
    
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_item').should('have.length', 0)
    
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_item').should('have.length', 0)
        cy.get('#continue-shopping').click()
    })

    it('should be able to checkout successfully', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    
        cy.get('#shopping_cart_container').click()
        cy.contains('Checkout').click()
    
        cy.get('#first-name').type('Rizal')
        cy.get('#last-name').type('Adityo')
        cy.get('#postal-code').type('12345')
        cy.get('#continue').click()
    
        cy.get('.cart_item').should('have.length', 1)
        cy.contains('Finish').click()
    
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        cy.contains('Back Home').click()
      })

    // it('should be able to logout', () => {
    //   cy.get('#user-name').type('standard_user')
    //   cy.get('#password').type('secret_sauce')
    //   cy.get('#login-button').click()
  
    //   cy.get('#react-burger-menu-btn').click()
    //   cy.get('#logout_sidebar_link').click()
  
    //   cy.url().should('eq', 'https://www.saucedemo.com/')
    // })

    // it('should not be able to login with invalid credentials', () => {
    //     cy.get('#user-name').type('invalid_user')
    //     cy.get('#password').type('invalid_password')
    //     cy.get('#login-button').click()
    
    //     cy.get('.error-button').should('be.visible')
    //   })
  })

  