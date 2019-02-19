const { By } = require('selenium-webdriver');

module.exports = function(driver) {
    return {
        goToUrl: async function(url) {
            await driver.get(url);
        },
        enterText: async function(name, text) {
            var element = await driver.findElement(By.name(name));
            await element.sendKeys(text);
        }
    }
};