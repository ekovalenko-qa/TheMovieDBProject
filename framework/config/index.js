// export * from './apikeys';
// export * from './userdata';
// export * from './urls';

const { userdata } = require('../config/userdata');
const { apikeys } = require('../config/apikeys');
const { urls } = require('../config/urls');

module.exports = { apikeys, urls, userdata };
