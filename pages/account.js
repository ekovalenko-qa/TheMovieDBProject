const { I } = inject();

module.exports = {
    // setting locators
    fields: {

    },
    reviewButton: {css: '#new_shortcut_bar > li.false.k-item.k-menu-item.k-state-default.k-first > span'},

    // introducing methods
    openFavorites() {
       I.click(this.reviewButton);
    },
}
