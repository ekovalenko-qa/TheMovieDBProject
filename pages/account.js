const { I } = inject();

module.exports = {
  // setting locators
  fields: {
    review: '//span[contains(text(), \'Обзор\')]',
    favorites: '//span[contains(text(), \'Избранные\')]',
    movies: '//a[contains(@href, \'favorites\') and contains(text(), \'Фильмы\')]',
  },

  // introducing methods
  openFavorites() {
    I.waitForElement(this.fields.review, 5);
    I.click(this.fields.review);
    I.click(this.fields.favorites);
    I.click(this.fields.movies);
  },
};
