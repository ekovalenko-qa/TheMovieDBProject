const { I, mainPage } = inject();

module.exports = {
  // setting locators
  fields: {
    password: '#password',
    username: '#username',
  },
  loginButton: { css: '#login_button' },

  // introducing methods
  login(username, password) {
    mainPage.comeIn();
    I.waitForText('Login to your account');
    I.click(this.fields.username);
    I.fillField(this.fields.username, username);
    I.click(this.fields.password);
    I.fillField(this.fields.password, password);
    I.click(this.loginButton);
  },
};
