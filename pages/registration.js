const { I, mainPage } = inject();
const faker = require('faker');

const PersonBuilder = function PersonBuilder() {
  this.addPassword = function addPassword() {
    this.Password = faker.internet.password();
    return this;
  };
  this.addName = function addName() {
    this.Name = faker.name.firstName();
    return this;
  };
  this.addEmail = function addEmail() {
    this.Email = faker.internet.email();
    return this;
  };
  this.generate = function generate() {
    const fields = Object.getOwnPropertyNames(this);
    const data = {};
    fields.forEach((fieldName) => {
      if (this[fieldName] && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName];
      }
    });
    return data;
  };
};

module.exports = {
  // setting locators
  fields: {
    email: '#email',
    password: '#password',
    passwordConfirm: '#password_confirm',
    username: '#username',

  },
  regButton: { css: '#sign_up_button' },

  // introducing methods
  createAccount() {
    const person = new PersonBuilder();
    const personData = person
      .addName()
      .addEmail()
      .addPassword()
      .generate();

    mainPage.goRegistration();
    I.fillField(this.fields.username, personData.Name);
    I.fillField(this.fields.password, personData.Password);
    I.fillField(this.fields.passwordConfirm, personData.Password);
    I.fillField(this.fields.email, personData.Email);
    I.click(this.regButton);
  },
};
