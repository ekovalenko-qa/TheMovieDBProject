const { userdata } = require('../framework/config/userdata');

// eslint-disable-next-line no-undef
Feature('UI тесты для сайта https://www.themoviedb.org, роль - пользователь');

// eslint-disable-next-line no-undef
Scenario('1. Пользователь может авторизоваться', ({ I, loginPage }) => {
  loginPage.login(userdata.username, userdata.password);
  I.see('Fox.red');
});

// eslint-disable-next-line no-undef
Scenario('2. Пользователь может добавить фильм в избранное', ({ I,loginPage, moviePage, mainPage }) => {
  loginPage.login(userdata.username, userdata.password);
  mainPage.search('Девушка, которая боялась дождя');
  moviePage.addToFavorites();
});

// eslint-disable-next-line no-undef
Scenario('3. Пользователь может оставить рецензию на фильм', ({ I, loginPage, moviePage }) => {
  loginPage.login(userdata.username, userdata.password);
  moviePage.addReview();
  I.see('This review is currently awaiting moderator approval.');
});

// eslint-disable-next-line no-undef
Scenario('4. Пользователь может посмотреть свой список избранного', ({
  I, loginPage, mainPage, accountPage,
}) => {
  loginPage.login(userdata.username, userdata.password);
  mainPage.goToAccount();
  accountPage.openFavorites();
  I.see('Избранные');
});
