//aula sobre commands
var loginActions= {
    with: function(email,pass) {
        return this
        .navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@emailInput', email)
        .setValue('@passInput', pass)
        .click('@loginButton')
    },
    expectAlertDanger: function (texto){ //validar mensagem de alerta
        return this
        .waitForElementVisible('@alertDanger',3000)
        .assert.containsText('@alertDanger',texto)
    },
    expectAlertInfo: function (texto){ //validar mensagem de alerta
        return this
        .waitForElementVisible('@alertInfo',3000)
        .assert.containsText('@alertInfo',texto)
    }
}

module.exports = {
    url:'http://zombie-web:5000/login',
    commands: [loginActions], //aula sobre commands
    //aula sobre page objects
    elements: {
        form: '.card-login',
        emailInput:'input[name=email]',
        passInput:'input[name=password]', 
        loginButton:'.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'

    }


}