const { userdata } = require('../../framework/config');

// eslint-disable-next-line no-undef
Feature('ui');

// eslint-disable-next-line no-undef
Before(({ loginPage }) => {
  loginPage.login(userdata.username, userdata.password);
});

// eslint-disable-next-line no-undef
Scenario('Пользователь может оставить рецензию на фильм', ({ I, moviePage }) => {
  moviePage.addReview();
  I.see('This review is currently awaiting moderator approval.');
});
