import LOGIN_ICON from './page/login'

describe('Learning WebdriverIO api', function () {
    it('should click on Login icon successfully', function () {

        $(LOGIN_ICON).click()
        browser.pause(10000)
        console.log("Hello World")
    });
});