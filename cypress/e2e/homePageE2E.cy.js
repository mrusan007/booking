import HomePage from "../pages/HomePage"

describe('Testing homepage for presence of elements and doing a simple search for stays', () => {
  it('Checks if elements are present on the homepage', () => {

    HomePage.elements.categoryStaysBtn().should('exist')
    HomePage.elements.categoryFlightsBtn().should('exist')
    HomePage.elements.categoryAttractionsBtn().should('exist')
    HomePage.elements.categoryCarRentalsBtn().should('exist')
    HomePage.elements.categoryAirportTaxiBtn().should('exist')
    HomePage.elements.registerBtn().should('exist')

  })

  it.only('Make a search and check if there are some results', () => {

    HomePage.typeInSearchBar('Zagreb')
    HomePage.pickFiveDaysDuration()
    HomePage.clickSearchButton()
    cy.xpath('//span[contains(.,"See availability")]')
    cy.contains('See availability')
    

  } )
})