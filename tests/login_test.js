//import {urls} from "./framework/config";
//import { userdata} from "../framework/config";
const { urls } = require('../framework/config/urls');
const { userdata } = require('../framework/config/userdata');

Feature('login');

Scenario('Пользователь может найти фильм по названию', ({ I,mainPage }) => {
    I.amOnPage(urls.tmdbUI);
    I.see('Добро пожаловать');
    I.see('Войти');
    mainPage.searchMovie('Монстры на каникулах');
    I.see('Монстры на каникулах');
    I.see('Результаты поиска');
});

Scenario('Пользователь может авторизоваться', ({ I,mainPage, loginPage }) => {
    I.amOnPage('https://www.themoviedb.org');
    mainPage.comeIn();
    loginPage.login(userdata.username, userdata.password);
    I.see('Fox.red');
});

Scenario('Пользователь может добавить фильм в избранное', ({ I,mainPage, loginPage }) => {
    I.amOnPage('https://www.themoviedb.org');
    mainPage.comeIn();
    loginPage.login(userdata.username, userdata.password);
});
