const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        password: '#password',
        username: '#username',
    },
    loginButton: {css: '#login_button'},

    // introducing methods
    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
}
