
module.exports = {
'@disabled': true,

     'login com sucesso': function (browser) {
        let userInfo = '.user .info span' //seletor CSS
        let login = browser.page.login() //aula sobre page objects
        let sidebar = browser.page.sidebar()

        browser.resizeWindow(1024, 768)

        login//aula sobre page objects
            .with('zumbi@dospalmares.com.br','pwd123')
        sidebar
            .waitForElementVisible('@userInfo', 'Quilombo', 3000) //seletor CSS
            .assert.containsText('@userInfo', 'Quilombo')
            .end();
    }
}
    /* 'Dado eu acesso a pagina de login': (browser) => {
        browser
            .resizeWindow(1024, 768)
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
    },
    'Quando faco login com sucesso': (browser) => {
        browser
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]', 'pwd123')
            .click('.login-button')

    },
    'Entao devo ver o meu nome na area logada': (browser) => {
        let userInfo = '.user .info span'
        browser
            .waitForElementVisible(userInfo, 'Quilombo', 3000)
            .assert.containsText(userInfo, 'Quilombo')
            .end();

    } */


//Transpilacao Babel