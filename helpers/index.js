const { By } = require('selenium-webdriver');

module.exports = function(driver) {
    return {
        getElement: async function (type, identifier){
            switch(type) {
                case "css":
                    return await driver.findElement(By.css(identifier));
                case "id":
                    return await driver.findElement(By.id(identifier));
                case "xpath":
                    return await driver.findElement(By.xpath(identifier));
                case "linkText":
                    return await driver.findElement(By.linkText(identifier));
                case "name":
                    return await driver.findElement(By.name(identifier));
                case "class":
                    return await driver.findElement(By.className(identifier));
                default:
                    return null;
            }

        },
    }
};