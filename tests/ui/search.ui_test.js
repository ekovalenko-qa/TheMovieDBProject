// eslint-disable-next-line no-undef
Feature('ui');

// eslint-disable-next-line no-undef
Scenario('Гость может найти информацию о фильме по названию', ({ I, mainPage }) => {
  mainPage.search('Монстры на каникулах');
  I.see('Search Results');
});

// eslint-disable-next-line no-undef
Scenario('Гость может найти информацию об артисте по имени', ({ I, mainPage }) => {
  mainPage.search('Bill Nighy');
  I.see('Search Results');
});
