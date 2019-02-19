const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest', () => {
    const driver = new Builder().forBrowser('chrome').build();
    const actions  = require('../helpers/actions')(driver);

    it('should show homepage', async () => {
        // await driver.get('https://google.com');
        // var searchBox = await driver.findElement(By.name('q'));

        // await searchBox.sendKeys("Gold");
        // await searchBox.submit();
        // const title = await driver.getTitle();

        // expect(title).to.equal('Google');

        await actions.goToUrl("https://www.bing.com/");
        await actions.enterText('name', 'q', 'Billy Jones');
    });

    after(async () => driver.quit());
});