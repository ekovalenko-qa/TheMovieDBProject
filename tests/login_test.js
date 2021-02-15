//import {urls} from "./framework/config";
//import { userdata} from "../framework/config";
const { urls } = require('../framework/config/urls');
const { userdata } = require('../framework/config/userdata');

Feature('login');

Scenario('Пользователь может найти фильм по названию', ({ I,mainPage }) => {
    mainPage.searchMovie('Монстры на каникулах');
    I.see('Монстры на каникулах');
    I.see('Результаты поиска');
});

Scenario('Пользователь может авторизоваться', ({ I, loginPage }) => {
    loginPage.login(userdata.username, userdata.password);
    I.see('Fox.red');
});

Scenario('Пользователь может добавить фильм в избранное', ({ I, loginPage, moviePage }) => {
    loginPage.login(userdata.username, userdata.password);
    moviePage.addToFavorites();
});

Scenario('Пользователь может оценить фильм', ({ I, loginPage, moviePage }) => {
    loginPage.login(userdata.username, userdata.password);
    moviePage.addRate();

});
