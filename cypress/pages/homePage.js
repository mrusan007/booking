import TimeFormating from './generalStuff'

class HomePage{


    elements = {
        // for some reason I can not get an element with id or data-testid, need to do some more investigation to find the answer
        categoryStaysBtn : () => cy.get(':nth-child(1) > .bui-tab__link > .bui-tab__text'),
        categoryFlightsBtn : () => cy.get(':nth-child(2) > .bui-tab__link > .bui-tab__text'),
        categoryCarRentalsBtn : () => cy.get(':nth-child(3) > .bui-tab__link > .bui-tab__text'),
        categoryAttractionsBtn : () => cy.get(':nth-child(4) > .bui-tab__link > .bui-tab__text'),
        categoryAirportTaxiBtn : () => cy.get(':nth-child(5) > .bui-tab__link > .bui-tab__text'),
        registerBtn: () => cy.get(':nth-child(5) > .bui-button > .bui-button__text'),
        signInBtn: () => cy.get(':nth-child(6) > .bui-button > .bui-button__text'),
        searchBar: () => cy.get('#ss'),
        datePicker: () => cy.get(':nth-child(2) > .xp__dates-inner > .xp__group > .sb-date-field > .sb-searchbox__input > .sb-date-field__icon > .sb-date-field__icon-text'),
        searchBtn: () => cy.get('.sb-searchbox__button')
    
    }
    
    
    clickOnStaysBtn(){
    
        this.elements.categoryStaysBtn().click()
    
    }
    
    clickOnFlightsBtn(){
    
        this.elements.categoryFlightsBtn().click()
        
    }

    clickOnCarRentalsBtn(){
    
        this.elements.categoryCarRentalsBtn().click()
        
    }

    clickOnAttractionsBtn(){
    
        this.elements.categoryAttractionsBtn().click()
        
    }

    clickOnAirportTaxiBtn(){

        this.elements.categoryAttractionsBtn().click()
        
    }

    typeInSearchBar(text){

        this.elements.searchBar().type(text)

    }

    pickFiveDaysDuration(){
        const todayObject = new TimeFormating();

        this.elements.datePicker().click()
        cy.get(todayObject.formatedTodayDate(), {timeout: 10000}).click()
        cy.get(todayObject.addFiveDaysToToday(), {timeout: 10000}).click()
    
    }

    clickSearchButton(){
        this.elements.searchBtn().click();
    }
    
    }
    
    
    module.exports = new HomePage();