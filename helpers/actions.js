const { By } = require('selenium-webdriver');

module.exports = function(driver) {
    const helpers = require("../helpers")(driver);

    return {
        goToUrl: async function(url) {
            await driver.get(url);
        },
        enterText: async function(type, identifier, text) {
            var element = await helpers.getElement(type, identifier);
            await element.sendKeys(text);
        }
    }
};