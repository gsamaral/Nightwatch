 /* module.exports = {
     

    before: (browser) => {
        console.log("antes de todos os steps")
    },

    after: (browser) => {
        console.log("depois de todos os steps")

    },

    beforeEach: (browser) => {
        console.log("antes de cada  step")

    },

    afterEach: (browser) => {
        console.log("depois de cada step")

    },


    'step one': (browser) => {
        browser
        .resizeWindow(1024, 768)
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
    },

    'step two': (browser) => {
        browser
        .resizeWindow(1024, 768)
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)

    }

 } */