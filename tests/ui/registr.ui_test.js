// eslint-disable-next-line no-undef
Feature('ui');

// eslint-disable-next-line no-undef
Scenario('Гость может зарегистрироваться', ({ I, registrationPage }) => {
  registrationPage.createAccount();
  I.see('Login');
});
