const { I } = inject();

module.exports = {
    // setting locators
    fields: {

    },
    loginButton: {css: '#login_button'},

    // introducing methods
    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
}
