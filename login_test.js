//import {urls} from "./framework/config";

Feature('login');

Scenario('Пользователь может найти фильм по названию', ({ I,mainPage }) => {
    I.amOnPage('https://www.themoviedb.org');
    I.see('Добро пожаловать');
    I.see('Войти');
    mainPage.searchMovie('Монстры на каникулах')
    I.see('Монстры на каникулах');
    I.see('Результаты поиска');

});
