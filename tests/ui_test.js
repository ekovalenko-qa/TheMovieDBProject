const { userdata } = require('../framework/config/userdata');
const { urls } = require('../framework/config/urls');

Feature('UI тесты для сайта https://www.themoviedb.org');

Scenario('1. Пользователь может найти информацию о фильме по названию', ({ I,mainPage }) => {
    mainPage.search('Монстры на каникулах');
    I.see('Монстры на каникулах');
    I.see('Результаты поиска');
});

Scenario('2. Пользователь может найти информацию об артисте по имени', ({ I,mainPage }) => {
    mainPage.search('Bill Nighy');
    I.see('Bill Nighy');
    I.see('Результаты поиска');
});

Scenario('3. Пользователь может авторизоваться', ({ I, loginPage }) => {
    loginPage.login(userdata.username, userdata.password);
    I.see('Fox.red');
});

Scenario('4. Пользователь может добавить фильм в избранное', ({ I, loginPage, moviePage, mainPage }) => {
    loginPage.login(userdata.username, userdata.password);
    mainPage.search('Девушка, которая боялась дождя');
    moviePage.addToFavorites();
});

// Scenario('5. Пользователь может зарегистрироваться', ({ I, registrationPage }) => {
//      registrationPage.createAccount();
//      I.see('Войти в свою учётную запись');
//
// });

Scenario('6. Пользователь может оставить рецензию на фильм', ({ I, loginPage, mainPage, moviePage }) => {
    loginPage.login(userdata.username, userdata.password);
    moviePage.addReview();
    I.see('This review is currently awaiting moderator approval.');
});

Scenario('7. Пользователь может посмотреть свой список избранного', ({ I, loginPage, mainPage }) => {
    loginPage.login(userdata.username, userdata.password);
    mainPage.goToAccount();
    I.see('Fox.red');
    I.see('Статистика');
});
