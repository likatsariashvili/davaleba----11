// - სახელი: likalika704 /  მეილი: email.test704@gmail.com  /  პაროლი:lika*1234

describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://automationteststore.com/")
    
  let password = "lika*12345"
  let password2 = "lika*123456"

  cy.loggin ("lika*12345", "lika*123456")
})

  })