const { I } = inject();

module.exports = {
  // setting locators
  fields: {
    review: '//*[@id="new_shortcut_bar"]/li[1]/span',
    favorites: '//*[@id="new_shortcut_bar"]/li[1]/div/ul/li[2]/span',
    movies: '//*[@id="new_shortcut_bar"]/li[1]/div/ul/li[2]/div/ul/li[1]/a',
  },

  // introducing methods
  openFavorites() {
    I.waitForText('Обзор');
    I.click(this.fields.review);
    I.click(this.fields.favorites);
    I.click(this.fields.movies);
  },
};
