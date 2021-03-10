# QA Engineer Assessment Solution

Name: Peter Nwankwo

## Steps taken to get command "npm run e2e test" to run successfully
1.) Fixed the path in "line 8" for "specs" in the file protractor.conf.js to resolve error "Spec patterns did not match any files"
2.) Created a folder "test-reports" in the root directory to resolve "Error: ENOENT: no such file or directory"
3.) Added "frameworkPath" in line 22 in the file protractor.conf.js to resolve Error: When config.framework is custom, config.frameworkPath is required
4.) Added framework by running command: "npm install --save-dev protractor-cucumber-framework" to resolve "Error: Cannot find module 'protractor-cucumber-framework'"
5.) Executed command in a CLI "npm run e2e test" to ensure the draft test runs successfully

## Steps taken to prepare the application for automated tests 
1.) For maintainability, I added a custom attribute called "data-testid" and used a standard naming convention to ensure the name of each element we interact with in the test is unique. I added "data-testid" attribute to elements in the following forms:
    - src\app\components\character\character.component.html
    - src\app\components\planet\planet.component.html
    - src\app\components\search-form\search-form.component.html
    - src\app\app.component.html

2.) I created a page object file for the elements we will interact with in the tests using the custom attribute "data-testid" to ensure that any modifications to the UI will be made separetly in one place. The page object files can be found in the folder created:
    - e2e\page\

## Automation Approach / Framework
A hybrid approach will be used to implement the tests comprising of liner and data-driven tests to validate the requirements mentioned. Related requirements are identified and grouped together as use stories, then the corresponding test scenarios is identified and test data is created.

## Assumptions
The data generated from the backend we're hitting [SWAPI (Star Wars API)](https://swapi.dev/documentation) is considered valid data

## User Story 1: As a Star Wars user I want to be able to search for a character/person so that I can see the details of the character/person
-- Acceptance Criteria:
*	When you search for **a character** and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
*	When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results.
*	You can search for results by clicking the “Search” button or by pressing “enter” on the search field
*	You can have more than one results, for both Planets and Names (partial matching)

## Steps taken for User Story 1
1.) Identify valid and invalid test scenarios. Test scenarios can be found in "UserStory1-TestScenariosPeople.csv"
2.) Create test data [characters] for each identified scenario. Test data can be found in './e2e/functional/**/search.json'
3.) Created protractor script that is driven by the data defined in step 2. Test script can be found in './e2e/functional/**/search.ispec.js'

## User Story 2: As a Star Wars user I want to be able to search for a Planet so that I can see the details of the planet
-- Acceptance Criteria:
*	When you search for **a planet** and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.
*	When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results.
*	You can search for results by clicking the “Search” button or by pressing “enter” on the search field
*	You can have more than one results, for both Planets and Names (partial matching)

## Steps taken for User Story 2
1.) Identify valid and invalid test scenarios. Test scenarios can be found in "UserStory2-TestScenariosPlanets.csv"
2.) Create test data [planets] for each identified scenario. Test data can be found in './e2e/functional/**/search.json'
4.) Created protractor script that is driven by the data defined in step 2. Test script can be found in './e2e/functional/**/search.ispec.js'

## User Story 3: As a user I want to explore Additional flows of Star wars search so that I know the flows work
--Acceptance criteria
*	When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed).
*	When for example you have searched for a full planet name and you’ve got results, if you switch to People and search for the same thing (that has no matching people based on a partial name), you should get a “Not found” in the results.

## Steps taken for User Story 3
1.) Identify test scenarios for additional flows. Test scenarios can be found in "UserStory3-TestScenariosAlternateFlows.csv"
2.) Create protractor tests. Test script can be found in './e2e/functional/**/search.ispec.js' 

## Additional Steps taken to execute Protractor tests
1.) Updated protractor.config.js in line 9 specs: to include all protractor tests in folder './e2e/functional/**/*.ispec.js'
2.) I Updated the protractor.config.js in line 34 & 35 to load all page files in folder ./e2e/page/ in section "onPrepare()"
3.) Updated the config file for jasmine reporter
4.) Installed Jasmin reporter by running in CLI: npm i jasmine-spec-reporter
    npm i jasmine-reporters
5.) Execute protractor tests by running in CLI: npm run e2e 

## Test Report Summary.
Below is the test summary report for the executed tests
   Executed: 24
   Passed: 20
   Failed: 4

   ## Bug 1: 
   --Description:   
   The previous search results for people are not removed when you clear the search form and click on Search button again
   --Reproduce steps:
   1.) Open the aplication
   2.) Select "People" and enter "Luke Skywalker"
   3.) Click on search
   4.) The search result is displayed
   5.) Clear the search form and click on search
   --Actual outcome
    Observe that the previous search results for people is not removed
   --Expected Outcome
    The previous search results for people should be removed
   ## Bug 2: 
   --Description:   
   The previous search results for people are not removed when you clear the search form and hit on the enter key
   --Reproduce steps:
   1.) Open the aplication
   2.) Select "People" and enter "Luke Skywalker"
   3.) on your keyboard, hit the enter key
   4.) The search result is displayed
   5.) Clear the search form and hit the enter key
   --Actual outcome
    Observe that the previous search results for people is not removed
   --Expected Outcome
    The previous search results for people should be removed
 ## Bug 3: 
   --Description:   
   The previous search results for planets are not removed when you clear the search form and click on Search button again
   --Reproduce steps:
   1.) Open the aplication
   2.) Select "planets" and enter "Hoth"
   3.) Click on search
   4.) The search result is displayed
   5.) Clear the search form and click on search
   --Actual outcome
    Observe that the previous search results for planet is not removed
   --Expected Outcome
    The previous search results for planet should be removed
   ## Bug 4: 
   --Description:   
   The previous search results for planets are not removed when you clear the search form and hit on the enter key
   --Reproduce steps:
   1.) Open the aplication
   2.) Select "planets" and enter "Hoth"
   3.) on your keyboard, hit the enter key
   4.) The search result is displayed
   5.) Clear the search form and hit the enter key
   --Actual outcome
    Observe that the previous search results for planet is not removed
   --Expected Outcome
    The previous search results for planet should be removed
