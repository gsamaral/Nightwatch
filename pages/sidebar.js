var userActions = {
    expectLoggedUser: function (name){
        return this
            .waitForElementVisible('@userInfo', name, 3000) //seletor CSS
            .assert.containsText('@userInfo', name)
    }

}


module.exports = {
    commands: [userActions],
    elements: {
        userInfo: '.user .info span' //seletor CSS
    }

}