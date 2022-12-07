
const BaseScreen = require('./_screen');
const { getUserCredentials } = require("../utils/utilities")

class LoginScreen extends BaseScreen {

    get dropdownSelectRegion () { return $(`//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeButton`) }
    get headerSearchRegion () { return $('//XCUIElementTypeStaticText[@name="Select Your Country/Region"]') }
    get textfieldSearchRegion () { return $('//XCUIElementTypeTextField') }
    get textfieldNumber () { return $(`//XCUIElementTypeTextField[contains(@value, 'Enter phone number')]`) }
    get buttonLoginSubmit () { return $(`//XCUIElementTypeButton[contains(@label, "Let's go!")]`) }
    
    async waitToFullyLoad () {
        return super.waitToFullyLoad(this.inputNumber);
    }

    /**
     * Selects a region based on the search string passed in "region" parameter.
     * @param {String} region exact or substring of region to search
     */
    async selectRegion(region="+63") {
        await this.dropdownSelectRegion.click()
        await this.headerSearchRegion.waitForDisplayed()
        await this.textfieldSearchRegion.click()
        await this.textfieldSearchRegion.setValue(region)
        await this.selectFirstResult()
        await this.headerSearchRegion.waitForDisplayed({ reverse: true })
    }

    /**
     * Inputs CP number.
     * @param number CP number to input.
     */
    async inputCpNumber(number) {
        await this.textfieldNumber.waitForDisplayed()
        await this.textfieldNumber.setValue(number)
    }

    /**
     * Inputs OTP code.
     * @param otpCode OTP code to input.
     */
    async inputOtpCode(otpCode) {
        if (otpCode.length !== 6) throw new Error("Invalid OTP code count, must be 6 digits.")

        for (let i = 0; i < otpCode.length; i++) {
            let textfieldOtp = $(`////XCUIElementTypeOther//XCUIElementTypeTextField[${i+1}]`)
            await textfieldOtp.setValue(otpCode[i])
        }
    }

    /**
     * Logs in user based on the user type passed. 
     * @param user User type to log in. Accepts host, alt, and viewer
     */
    async loginUser(user='HOST') {
        let userCredentials = await getUserCredentials(user)

        await this.buttonLogin.click()
        await this.selectRegion()
        await this.inputCpNumber(userCredentials.cpNumber)
        await this.buttonLoginSubmit.click()
        await this.inputOtpCode(userCredentials.otpCode)
    }
}

module.exports = new LoginScreen();