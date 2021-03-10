const { Given } = require('cucumber');
const { browser, by } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});
