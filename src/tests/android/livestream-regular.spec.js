const LandingScreen = require('../../pages/landing.screen');
const LoginScreen = require('../../pages/login.screen');


describe('Livestream setup',  () => {
    it('Host can setup and start a regular livestream', async () => {
        await LandingScreen.waitToFullyLoad()
        
        await LandingScreen.click(LandingScreen.buttonLogin)
        await LoginScreen.waitToFullyLoad()
        await LoginScreen.loginUser('host')
    });
});