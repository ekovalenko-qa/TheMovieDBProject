// enable I and another page object
const { I } = inject();

const { urls } = require('../framework/config/urls');

module.exports = {
    // setting locators
    fields: {
        search: '#inner_search_v4',
        movieName: '#popular_scroller > div > div:nth-child(3) > div.content > h2 > a',
    },
    searchButton: {css: '#inner_search_form > input[type=submit]'},
    comeInButton: {css: 'body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a'},

    // introducing methods
    searchMovie(movie) {
        I.amOnPage(urls.tmdbUI);
        I.fillField(this.fields.search, movie);
        I.click(this.searchButton);
    },
    comeIn() {
        I.amOnPage(urls.tmdbUI);
        I.click(this.comeInButton);
    },

}
