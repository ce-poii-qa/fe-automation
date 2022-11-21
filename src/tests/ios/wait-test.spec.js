describe('Waiting test', () => {
    it('User waits for few seconds', async () => {
        const elem1 = await $('//XCUIElementTypeStaticText[@name="WEBDRIVER"]')

        await expect(elem1).toBeDisplayed()
        await browser.pause(5000)
    });
});


