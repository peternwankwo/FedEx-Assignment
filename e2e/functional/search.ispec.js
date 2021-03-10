'use strict';
const { browser } = require('protractor');

describe('Star Wars Search Application', function() {
	//Load the Json file
	var testdata = require('./search.json'); 

	//Tests for User story 1
	describe('User Story 1: As a Star Wars user I want to be able to search for a character/person so that I can see the details of the character/person', function() { 
			//Load the test data for characters/people
			var Objkeys = Object.keys(testdata['characters']); 
			for ( var i = 0 ; i < Objkeys.length ; i ++ ) {
					(function (s) {
						//execute tests iterating through the test data for characters/people
						it(s.Scenario + ' to ' + s.SearchInputCharacter, function() {							
							//Function to open browser and select search option
							page.StarWarsSearch.selectSearchType(s.SearchType);

							//enter search term
							page.StarWarsSearch.inputSearch.sendKeys(s.SearchInputCharacter);

							//function to perform search by clicking search button or Enter Key
							page.StarWarsSearch.selectSearchTrigger(s.SearchTrigger);

							//This asserts the expected results are correct for gender, birthyear, eyecolour, skin colour
							if (s.ExpectedSearchResults=="Single"){
								expect(page.StarWarsSearch.divGender.getText()).toContain(s.ExpectedGender); //compare actual gender to expected test data
								expect(page.StarWarsSearch.divBirthYear.getText()).toContain(s.ExpectedBirthYear); //compare actual birth year to expected test data
								expect(page.StarWarsSearch.divEyeColour.getText()).toContain(s.ExpectedEyeColor); //compare actual eye colour to expected test data
								expect(page.StarWarsSearch.divSkinColour.getText()).toContain(s.ExpectedSkinColor); //compare actual skin colour to expected test data
							}
							else if (s.ExpectedSearchResults=="Multiple"){
								//Check that the number of search result items is greater than 1
								page.StarWarsSearch.divSearchResultItem.count().then(function (count) {
									expect(count).toBeGreaterThan(1);
								});				
							}
							else if (s.ExpectedSearchResults=="Not Found"){															
								//Check that the "Not Found" element is visible
								expect(page.StarWarsSearch.divNotFound.isDisplayed()).toBeTruthy();
								//Check the text displayed contains "Not Found"
								expect(page.StarWarsSearch.divNotFound.getText()).toContain('Not Found');
							}						
						});
					})(testdata.characters[i]);
			}//end for loop
	});//End describe Search person/character

	//Tests for User story 2 (data-driven)
	describe('User Story 2: As a Star Wars user I want to be able to search for a Planet so that I can see the details of the planet', function() { 
			//Load the test data for planets
			var Objkeys = Object.keys(testdata['planets']);
			for ( var i = 0 ; i < Objkeys.length ; i ++ ) {
					(function (s) {
						//execute tests iterating through the test data for plannets
						it(s.Scenario + ' to ' + s.SearchInputCharacter, function() {

							//Function to open browser and select search option Persons or Planet
							page.StarWarsSearch.selectSearchType(s.SearchType);

							//Input the search term
							page.StarWarsSearch.inputSearch.sendKeys(s.SearchInputCharacter);

							//function to perform search by clicking on button or hitting the Enter key
							page.StarWarsSearch.selectSearchTrigger(s.SearchTrigger);		

							//This verifies the results for population, climate and gravity are correct
							if (s.ExpectedSearchResults=="Single"){
								expect(page.StarWarsSearch.divPopulation.getText()).toContain(String(s.ExpectedPopulation));//compare actual population to expected test data
								expect(page.StarWarsSearch.divClimate.getText()).toContain(s.ExpectedClimate); //compare actual climate to expected test data
								expect(page.StarWarsSearch.divGravity.getText()).toContain(s.ExpectedGravity); //compare actual gravity to expected test data
							}
							else if (s.ExpectedSearchResults=="Multiple"){
								//Check that the number of search result items is greater than 1
								page.StarWarsSearch.divSearchResultItem.count().then(function (count) {
									expect(count).toBeGreaterThan(1);				
								});			
							}
							else if (s.ExpectedSearchResults=="Not Found"){
								//Chech that the Not Found element is visible and displayed
								expect(page.StarWarsSearch.divNotFound.isDisplayed()).toBeTruthy();
								//Check the text displayed contains Not Found
								expect(page.StarWarsSearch.divNotFound.getText()).toContain('Not Found');
							}		
						});
					})(testdata.planets[i]);
			}//end for loop
		});//End describe Search planet

		//Tests for User story 3
		describe('User Story 3: As a user I want to explore Additional flows of Star wars search so that I know the flows work', function() { 
			
						it('Should remove the previous planet search result when the form is cleared and the search button is clicked again', function() {
							
							//Function to open browser and select search option Planet
							page.StarWarsSearch.selectSearchType('Planet');

							//enter search term that will produce one or more search items
							page.StarWarsSearch.inputSearch.sendKeys('Hoth');
	
							//perform search by clicking 
							page.StarWarsSearch.btnSearch.click();

							//Check to see that there are search result item(s)
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {						
								expect(count).toBeGreaterThan(0);				
							});

							// Clear the search form
							page.StarWarsSearch.inputSearch.click().clear();

							//perform search by clicking  on search button
							page.StarWarsSearch.btnSearch.click();

							//Check to see if there are no result items displayed after clearing the form and clicking on search again
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {							
								expect(count).toBeLessThan(1);				
							});						
						});

						it('Should remove the previous planet search result when the form is cleared and the ENTER key is hit again', function() {
							
							//Function to open browser and select search option Planet
							page.StarWarsSearch.selectSearchType('Planet');
							
							//enter search term that will produce one or more search items
							page.StarWarsSearch.inputSearch.sendKeys('Hoth');
	
							//perform search by hitting the ENTER key
							browser.actions().sendKeys(protractor.Key.ENTER).perform();

							//Check to see that there are search result item(s)
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {						
								expect(count).toBeGreaterThan(0);				
							});

							// Clear the search form
							page.StarWarsSearch.inputSearch.click().clear();

							//perform search by hitinh the ENTER key
							browser.actions().sendKeys(protractor.Key.ENTER).perform();

							//Check to see if there are no result items displayed after clearing the form and clicking on search again
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {							
								expect(count).toBeLessThan(1);				
							});						
						});

						it('Should remove the previous people search result when the form is cleared and the search button is clicked again', function() {
							
							//Function to open browser and select search option Persons
							page.StarWarsSearch.selectSearchType('Character');
							
							//enter search term that will produce one or more search items
							page.StarWarsSearch.inputSearch.sendKeys('Luke Skywalker');
	
							//perform search by clicking 
							page.StarWarsSearch.btnSearch.click();

							//Check to see that there are search result item(s)
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {						
								expect(count).toBeGreaterThan(0);				
							});

							// Clear the search form
							page.StarWarsSearch.inputSearch.click().clear();

							//perform search by clicking  on search button
							page.StarWarsSearch.btnSearch.click();

							//Check to see if there are no result items displayed after clearing the form and clicking on search again
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {							
								expect(count).toBeLessThan(1);				
							});						
						});

						it('Should remove the previous people search result when the form is cleared and the ENTER key is hit again', function() {
							
							//Function to open browser and select search option Persons
							page.StarWarsSearch.selectSearchType('Character');
							
							//enter search term that will produce one or more search items
							page.StarWarsSearch.inputSearch.sendKeys('Luke Skywalker');
	
							//perform search by hitinh the ENTER key
							browser.actions().sendKeys(protractor.Key.ENTER).perform();

							//Check to see that there are search result item(s) greater than 0
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {						
								expect(count).toBeGreaterThan(0);				
							});

							// Clear the search form
							page.StarWarsSearch.inputSearch.click().clear();

							//perform search by hitinh the ENTER key
							browser.actions().sendKeys(protractor.Key.ENTER).perform();

							//Check to see if there are no result items displayed after clearing the form and clicking on search again
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {							
								expect(count).toBeLessThan(1);				
							});						
						});

						it('Should display Not Found When searching for people using the same search term as a full planet name that has previous search results on hiting the ENTER key',  function() {
							
							//Function to open browser and select search option Planet
							page.StarWarsSearch.selectSearchType('Planet');
							
							//enter search term that will produce one or more search items
							page.StarWarsSearch.inputSearch.sendKeys('Alderaan');
	
							//perform search by hitinh the ENTER key
							browser.actions().sendKeys(protractor.Key.ENTER).perform();

							//Check to see that there are search result item(s) greater than 0
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {						
								expect(count).toBeGreaterThan(0);				
							});

							// Select the radio people
							page.StarWarsSearch.radioPeople.click();

							//perform search by hitinh the ENTER key
							browser.actions().sendKeys(protractor.Key.ENTER).perform();

							//Check to see if there are no result items displayed after clearing the form and clicking on search again
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {							
								expect(count).toBeLessThan(1);				
							});
							
							//Chech that the Not Found element is visible and displayed
							expect(page.StarWarsSearch.divNotFound.isDisplayed()).toBeTruthy();
							//Check the text displayed contains Not Found
							expect(page.StarWarsSearch.divNotFound.getText()).toContain('Not found.');
						});

						it('Should display Not Found When searching for people using the same term as a full planet name that has previous search results on clicking the search button',  function() {
							
							//Function to open browser and select search option Planet
							page.StarWarsSearch.selectSearchType('Planet');
							
							//enter search term that will produce one or more search items
							page.StarWarsSearch.inputSearch.sendKeys('Alderaan');
	
							//perform search by clicking  on search button
							page.StarWarsSearch.btnSearch.click();

							//Check to see that there are search result item(s) greater than 0
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {						
								expect(count).toBeGreaterThan(0);				
							});

							// Select the radio people
							page.StarWarsSearch.radioPeople.click();

							//perform search by clicking 
							page.StarWarsSearch.btnSearch.click();

							//Check to see if there are no result items displayed after clearing the form and clicking on search again
							page.StarWarsSearch.divSearchResultItem.count().then(function (count) {							
								expect(count).toBeLessThan(1);				
							});
							
							//Chech that the Not Found element is visible and displayed
							expect(page.StarWarsSearch.divNotFound.isDisplayed()).toBeTruthy();
							//Check the text displayed contains Not Found
							expect(page.StarWarsSearch.divNotFound.getText()).toContain('Not found.');
						});

						
		});//End describe 

  });