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

Cypress.Commands.add ("loggin", (password, password2) => {

    let random=Math.round((Math.random()*1000))
    
    cy.get('#customer_menu_top > li').click()
          cy.get('.newcustomer > .heading2').should("have.text", "I am a new customer.")
          cy.get('#accountFrm_accountregister').should("be.checked")
          cy.get('#accountFrm > fieldset > .btn').click()
          cy.get('#AccountFrm_firstname').type("lika")
          cy.get('#AccountFrm_lastname').type("lika")
          cy.get('#AccountFrm_email').type("email.test"+random+"@gmail.com")
          cy.get('#AccountFrm_address_1').type("london")
          cy.get('#AccountFrm_city').type("london")
          cy.get('#AccountFrm_zone_id').select("Aberdeen")
          cy.get('#AccountFrm_postcode').type("112233")
          cy.get('#AccountFrm_country_id').select("United Kingdom")
          cy.get('#AccountFrm_loginname').type("likalika"+random)
          cy.get('#AccountFrm_password').type(password)
          cy.get('#AccountFrm_confirm').type(password)
          cy.get('#AccountFrm_newsletter1').check()
          cy.get('#AccountFrm_agree').check()
          cy.get('.col-md-2 > .btn').click()
          cy.get('.maintext').should("contain", "Your Account Has Been Created!")
          cy.get('.side_account_list > :nth-child(3) > a').click()
          cy.get('#AccountFrm_firstname').clear()
          cy.get('#AccountFrm_firstname').type("lili")
          cy.get('#AccountFrm_lastname').clear()
          cy.get('#AccountFrm_lastname').type("iadze")
          cy.get('.col-md-12 > .btn-orange').click()
          cy.contains("Success: Your account has been successfully updated.").should("be.visible")
          cy.get('.side_account_list > :nth-child(4) > a').click()
          cy.get('#PasswordFrm_current_password').type(password)
          cy.get('#PasswordFrm_password').type(password2)
          cy.get('#PasswordFrm_confirm').type(password2)
          cy.get('.col-md-12 > .btn-orange').click()
          cy.contains("Success: Your password has been successfully updated.").should("be.visible")
          cy.get('.side_account_list > :nth-child(5) > a').click()
          cy.get('tr > .pull-right > .btn').click()
          cy.get('#AddressFrm_firstname').clear()
          cy.get('#AddressFrm_firstname').type("lily")
          cy.get('#AddressFrm_lastname').clear()
          cy.get('#AddressFrm_lastname').type("lily")
          cy.get('#AddressFrm_address_1').clear()
          cy.get('#AddressFrm_address_1').type("Quebec")
          cy.get('#AddressFrm_city').clear()
          cy.get('#AddressFrm_city').type("Quebec")
          cy.get('#AddressFrm_country_id').select("Canada")
          cy.get('#AddressFrm_zone_id').select("Québec")
          cy.get('#AddressFrm_postcode').clear()
          cy.get('#AddressFrm_postcode').type("789123")
          cy.get('[for="AddressFrm_default1"]').click()
          cy.get('.col-md-12 > .btn-orange').click()
          cy.contains("Your address has been successfully updated").should("be.visible")
})