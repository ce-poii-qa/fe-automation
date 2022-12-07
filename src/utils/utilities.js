
/**
 * Retrieves user information from json file
 * @param user User type to log in. Accepts host, alt, and viewer
 * @returns user object
 */
// TODO: Use json file to store credentials and retrieve using this method
exports.getUserCredentials = (user) => { 
    if (this.formatInput(user) == 'HOST') {
        return {
            'cpNumber': '0000080619',
            'otpCode': '278897'
        }
    }
    else {
        throw new Error('User does not match: ' + user)
    }
}

/**
 * Formats input to uniformize our input.
 * @param input value to format
 * @returns formatted string value
 */
exports.formatInput = (input) => {
    if (input) return (input.toString()).toUpperCase()
}