const { Builder } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should show homepage', async () => {
        await driver.get('https://google.com');
        const title = await driver.getTitle();

        expect(title).to.equal('Google');
    });

    after(async () => driver.quit());
});