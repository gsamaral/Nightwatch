//hooks global
module.exports = {
    beforeEach: (browser,done) => {
        browser.resizeWindow(1024, 768)
        done() //callback
    },

    afterEach: (browser,done) => {
        browser.end()
        done()
    },
}