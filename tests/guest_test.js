// eslint-disable-next-line no-undef
Feature('UI тесты для сайта https://www.themoviedb.org, роль - гость');

// eslint-disable-next-line no-undef
Scenario('1. Гость может найти информацию о фильме по названию', ({ I, mainPage }) => {
  mainPage.search('Монстры на каникулах');
  I.see('Search Results');
});

// eslint-disable-next-line no-undef
Scenario('2. Гость может найти информацию об артисте по имени', ({ I, mainPage }) => {
  mainPage.search('Bill Nighy');
  I.see('Search Results');
});

// eslint-disable-next-line no-undef
Scenario('3. Гость может зарегистрироваться', ({ I, registrationPage }) => {
  registrationPage.createAccount();
  I.see('Login');
});
