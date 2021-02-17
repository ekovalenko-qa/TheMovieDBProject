// enable I and another page object
const { I } = inject();
const { urls } = require('../framework/config/urls');

module.exports = {
    // setting locators
    fields: {
        movieName: '#original_header > div.header_poster_wrapper.true > section > div.title.ott_true > h2 > a',
        reviewArea: '#editor-textarea > div > textarea',

    },
    favoriteButton: {css: '#favourite > span'},
    reviewButton: {css: '#reviews'},
    addOneButton: {css: '#media_v4 > div > div > div:nth-child(1) > div > section.panel.media_panel.social_panel.tv_panel > section > div.content > div > div > div > p > a'},
    submitButton: {css: '#submit'},

    // introducing methods
    addToFavorites() {
        I.amOnPage('https://www.themoviedb.org/tv/1622-supernatural');
        I.click(this.favoriteButton);
    },
    addReview() {
        I.amOnPage('https://www.themoviedb.org/tv/1622-supernatural');
        I.click(this.reviewButton);
        I.click(this.addOneButton);
        I.fillField(this.fields.reviewArea,'Its amazing! I like it.');
        I.click(this.submitButton);

    },


}

