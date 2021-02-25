const { userdata } = require('../../framework/config');

// eslint-disable-next-line no-undef
Feature('ui');

// eslint-disable-next-line no-undef
Before(({ loginPage }) => {
  loginPage.login(userdata.username, userdata.password);
});

// eslint-disable-next-line no-undef
Scenario('1. Пользователь может добавить фильм в избранное', ({ I, moviePage, mainPage }) => {
  mainPage.search('Девушка, которая боялась дождя');
  moviePage.addToFavorites();
});

// eslint-disable-next-line no-undef
Scenario('2. Пользователь может посмотреть свой список избранного', ({ I, mainPage, accountPage }) => {
  mainPage.goToAccount();
  accountPage.openFavorites();
  I.see('Избранные');
});
