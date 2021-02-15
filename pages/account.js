const { I } = inject();

module.exports = {
    // setting locators
    fields: {

    },
    reviewButton: {css: '#new_shortcut_bar > li.false.k-item.k-menu-item.k-state-default.k-first > span'},

    // introducing methods
    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
}
