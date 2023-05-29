class FligthsPage{
    elements = {
        searchBtn: () => cy.get('.css-1ugzukl > .Actionable-module__root___lQCcK'),
    }

   clickSearchBtn(){
    this.elements.searchBtn().click()
   }
}

module.exports = new FligthsPage();