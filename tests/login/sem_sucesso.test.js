
module.exports = {
/*'@disabled': true,*/
     'senha incorreta': function (browser) {
        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com.br','123abc')
                //encapsular assert
            .expectAlertDanger('Usuário e/ou senha inválidos')
    },
    'nao cadastrado':(browser)=>{
        let login = browser.page.login()

        login
            .with('exemplo@dospalmares.com.br','123abc')
            .expectAlertDanger('Usuário e/ou senha inválidos')

    },
    'email nao informado': (browser)=>{
        let login = browser.page.login()

        login
            .with('','123abc')
            .waitForElementVisible('@alertInfo',3000)
            .expectAlertInfo('Opps. Cadê o email?')
    },
    'senha nao informada': (browser)=>{
        let login = browser.page.login()

        login
            .with('eu@papito.io','')
            .expectAlertInfo('Opps. Cadê a senha?')
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


