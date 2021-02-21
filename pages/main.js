// enable I and another page object
const { I } = inject();
const { urls } = require('../framework/config/urls');
const { userdata } = require('../framework/config/userdata');

module.exports = {
  // setting locators
  fields: {
    search: '#inner_search_v4',
    movieName: '#popular_scroller > div > div:nth-child(3) > div.content > h2 > a',
    searchResult: '#main > section > div > div > div.grey_column > div > h3',
  },
  searchButton: { css: '#inner_search_form > input[type=submit]' },
  comeInButton: { css: 'body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a' },
  registrationButton: { css: 'body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(4) > a' },
  accountButton: { css: 'body > footer > nav > div.join > a' },

  // introducing methods
  search(param) {
    I.amOnPage(urls.tmdbUI);
    I.fillField(this.fields.search, param);
    I.click(this.searchButton);
    I.waitForElement(this.fields.searchResult);
  },
  comeIn() {
    I.amOnPage(urls.tmdbUI);
    I.waitForElement(this.comeInButton);
    I.click(this.comeInButton);
  },
  goRegistration() {
    I.amOnPage(urls.tmdbUI);
    I.click(this.registrationButton);
  },
  goToAccount() {
    I.amOnPage(urls.tmdbUI);
    I.waitForText(`Привет, ${userdata.username}!`);
    I.click(this.accountButton);
  },
};
