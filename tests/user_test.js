//const { userdata } = require('../framework/config/userdata');
const { userdata } = require('../framework/config/index');

// eslint-disable-next-line no-undef
Feature('UI тесты для сайта https://www.themoviedb.org, роль - пользователь');

// eslint-disable-next-line no-undef
Before(({ loginPage }) => {
  loginPage.login(userdata.username, userdata.password);
});

// eslint-disable-next-line no-undef
Scenario('1. Пользователь может авторизоваться', ({ I }) => {
  I.see('Fox.red');
});

// eslint-disable-next-line no-undef
Scenario('2. Пользователь может добавить фильм в избранное', ({ I, moviePage, mainPage }) => {
  mainPage.search('Девушка, которая боялась дождя');
  moviePage.addToFavorites();
});

// eslint-disable-next-line no-undef
Scenario('3. Пользователь может оставить рецензию на фильм', ({ I, moviePage }) => {
  moviePage.addReview();
  I.see('This review is currently awaiting moderator approval.');
});

// eslint-disable-next-line no-undef
Scenario('4. Пользователь может посмотреть свой список избранного', ({ I, mainPage, accountPage }) => {
  mainPage.goToAccount();
  accountPage.openFavorites();
  I.see('Избранные');
});
