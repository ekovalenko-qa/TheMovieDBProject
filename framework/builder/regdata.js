// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

class InterfaceData {
  async getUsername() {
    return faker.user.name();
  }

  async getPassword() {
    return faker.password();
  }
}

module.exports = new InterfaceData();
