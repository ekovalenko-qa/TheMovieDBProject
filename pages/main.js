// enable I and another page object
const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        search: '#inner_search_v4'
    },
    searchButton: {css: '#inner_search_form > input[type=submit]'},
    comeInButton: {css: 'body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a'},

    // introducing methods
    searchMovie(movie) {
        I.fillField(this.fields.search, movie);
        I.click(this.searchButton);
    },
    comeIn() {
        I.click(this.comeInButton);
    },

}
