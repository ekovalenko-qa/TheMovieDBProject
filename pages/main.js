// enable I and another page object
const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        search: '#inner_search_v4'
    },
    searchButton: {css: '#inner_search_form > input[type=submit]'},

    // introducing methods
    searchMovie(movie) {
        I.fillField(this.fields.search, movie);
        I.click(this.searchButton);
    },

}
