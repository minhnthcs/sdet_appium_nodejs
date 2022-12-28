describe('Learning WebdriverIO api', function () {
    it('should click on Login icon successfully', function () {
        const LOGIN_ICON = '~Login'

        $(LOGIN_ICON).click()
        browser.pause(10000)
    });
});