const { I, mainPage } = inject();

module.exports = {
    // setting locators
    fields: {
        password: '#password',
        username: '#username',
    },
    loginButton: {css: '#login_button'},

    // introducing methods
    login(username, password) {
        mainPage.comeIn();
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
}
