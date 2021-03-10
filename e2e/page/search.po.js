'use strict';

module.exports = function() {
    //Search input field
    this.inputSearch = $$('[data-testid="txt-query"]');  

    //people radio button
    this.radioPeople = $$('[data-testid="rdb-people"]');

    //Planet radio button
    this.radioPlanets = $$('[data-testid="rdb-planets"]');

    //Search button
    this.btnSearch = $$('[data-testid="btn-search"]');

    //H6 element containing searched term
    this.hdSearch = $$('[data-testid="hd-search-text"]');

    //div element containing gender
    this.divGender = $$('[data-testid="div-gender"]');

    //div element containing birth-year
    this.divBirthYear = $$('[data-testid="div-birth-year"]');

    //div element containing eye-colour
    this.divEyeColour = $$('[data-testid="div-eye-colour"]');

     //div element containing skin-colour
     this.divSkinColour = $$('[data-testid="div-skin-color"]');

    
    //Elements for Planet search
     //div element containing population
    this.divPopulation = $$('[data-testid="div-population"]');

    //div element containing climate
    this.divClimate = $$('[data-testid="div-climate"]');

    //div element containing gravity
    this.divGravity = $$('[data-testid="div-gravity"]');

     //div element containing search result item
     this.divSearchResultItem = $$('[data-testid="div-search-result-item"]');

     //div element containing search result item
     this.divNotFound = $$('[data-testid="div-not-found"]');

     //function to Open the application and select the search type
     this.selectSearchType = function(searchType) {
            browser.get('http://localhost:4200/');

            //select search	type character/person or planet
            if (searchType=="Character"){
                page.StarWarsSearch.radioPeople.click();
            }
            else if (searchType=="Planet"){
                page.StarWarsSearch.radioPlanets.click();
            }
     }

    //function to perform search by clicking or hitting enter key
     this.selectSearchTrigger = function(trigger){
            if (trigger=="Enter"){
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
            }
            else if (trigger=="Click"){
                page.StarWarsSearch.btnSearch.click();
            }				
     }
  };