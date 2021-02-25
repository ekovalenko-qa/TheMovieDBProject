const { userdata } = require('../../framework/config');

// eslint-disable-next-line no-undef
Feature('ui');

// eslint-disable-next-line no-undef
Scenario('1. Пользователь может авторизоваться', ({ I, loginPage }) => {
  loginPage.login(userdata.username, userdata.password);
  I.see('Fox.red');
});
