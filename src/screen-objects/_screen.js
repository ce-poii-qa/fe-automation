
module.exports = class BaseScreen {

    get imageKumu () { return $('//XCUIElementTypeImage[contains(@name, "ic_kumu_login")]') }
    get buttonLogin () { return $('//XCUIElementTypeButton[contains(@name, "Login")]') }
    get buttonSignup () { return $('//XCUIElementTypeButton[contains(@name, "Sign Up")]') }

    async click (element) {
        await element.waitForDisplayed()
        await element.click()
    }
    /**
     * Waits for the screen to completely load.
     * @param pageIdentifier element identifier of the screen that should be loaded.
     */
    async waitToFullyLoad (pageIdentifier) {
        await pageIdentifier.waitForDisplayed()
    }

    /**
     * Selects the first result from the list of results and is useful when searching for a specific item.
     * Makes sure that there's no other result other than the first one. 
     */
    async selectFirstResult() {
        let targetResult = $(`//XCUIElementTypeTable/XCUIElementTypeCell[1]`)
        let secondResult = $(`//XCUIElementTypeTable/XCUIElementTypeCell[2]`)
        
        await secondResult.waitForDisplayed({reverse: true})
        await targetResult.waitForDisplayed()
        await targetResult.click()
        await targetResult.waitForDisplayed({reverse: true})
    }
}