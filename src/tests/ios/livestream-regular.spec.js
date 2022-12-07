const LandingScreen = require('../../screen-objects/landing.screen');
const LoginScreen = require('../../screen-objects/login.screen');


describe('Livestream setup',  () => {
    it('Host can setup and start a regular livestream', async () => {
        await LandingScreen.waitToFullyLoad()
        await LoginScreen.loginUser('host')
    });
});
