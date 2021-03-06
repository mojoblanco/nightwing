const { By } = require('selenium-webdriver');

module.exports = function(driver) {
    const helpers = require("../helpers")(driver);

    return {
        goToUrl: async (url) => {
            await driver.get(url);
        },
        enterText: async (type, identifier, text) => {
            var element = await helpers.getElement(type, identifier);
            await element.sendKeys(text);
        },
        clickElement: async (type, identifier) => {
            var element = await helpers.getElement(type, identifier);
            element.click();
        },
        executeScript: async (script) => {
            await driver.executeScript(script);
        },

    }
};