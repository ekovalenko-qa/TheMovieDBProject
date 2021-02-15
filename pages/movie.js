// enable I and another page object
const { I } = inject();
const { urls } = require('../framework/config/urls');

module.exports = {
    // setting locators
    fields: {
        movieName: '#original_header > div.header_poster_wrapper.true > section > div.title.ott_true > h2 > a',
        stars: '',
        rating: '#rate_it'
    },
    favoriteButton: {css: '#favourite > span'},
    rateButton: {css: '#rate_it > span'},

    // introducing methods
    addToFavorites() {
        I.amOnPage('https://www.themoviedb.org/tv/1622-supernatural');
        I.click(this.favoriteButton);
    },
    addRate() {
        I.amOnPage('https://www.themoviedb.org/tv/1622-supernatural');
        I.click(this.rateButton);
       // I.click(this.fields.stars);
    },

}

