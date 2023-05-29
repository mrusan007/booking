import HomePage from "../pages/HomePage"
import FligthsPage from "../pages/filghtsPage"

describe('Doing a search on Fligths, checking if any resluts will be shown', () => {

    // This is an awful test, would need help from developers to locate elements
    // For some reason defualt From field has value Split, so I am just playing along
    // Also departures have defualt values
    it('Checks if search gives some results', () => {
        
        HomePage.clickOnFlightsBtn()
        cy.get('[data-ui-name="input_location_from_segment_0"]')
        cy.get('.css-196ty2x').click()
        cy.get('[data-ui-name="input_location_from_segment_0"]').click().type('Zagreb')
        cy.get(':nth-child(3) > .Text-module__root--variant-body_2___-3fYM > .InputCheckbox-module__container___J2qDp > .InputCheckbox-module__field___R4nYQ').click()
        FligthsPage.clickSearchBtn()
        cy.xpath('//button[contains(.,"See flight")]')
        cy.contains('See flight')
        
    })
  
  })