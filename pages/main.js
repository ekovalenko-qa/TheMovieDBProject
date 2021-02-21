// enable I and another page object
const { I } = inject();
const { urls } = require('../framework/config/urls');

module.exports = {
  // setting locators
  fields: {
    search: '#inner_search_v4',
    movieName: '#popular_scroller > div > div:nth-child(3) > div.content > h2 > a',
    searchResult: '#main > section > div > div > div.grey_column > div > h3',
    avatar: '/html/body/div[1]/header/div[1]/div/div[2]/ul/li[4]/a/div/img',
    out: 'body > div:nth-child(39) > div > div.k-tooltip-content > div > div:nth-child(4) > p',
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
    I.waitForSelector(this.accountButton);
    I.click(this.accountButton);
  },
  logOut() {
    I.amOnPage(urls.tmdbUI);
    I.click(this.fields.avatar);
    I.click(this.fields.out);
  },
};
