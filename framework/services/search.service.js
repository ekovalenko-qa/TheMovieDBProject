import supertest from 'supertest';
import { apikeys, urls } from '../config';

const SearchTMDB = function SearchTMDB() {
  this.searchByName = async function searchByName(params) {
    const r = await supertest(urls.tmdb)
      .get('/3/search/person')
      .query({ api_key: `${apikeys.apikey_v3}`, query: 'Emma Watson' });
    return r;
  };
  this.searchByKeyword = async function searchByKeyword(word) {
    const r = await supertest(urls.tmdb)
      .get('/3/search/keyword')
      .query({ api_key: `${apikeys.apikey_v3}`, query: word });
    return r;
  };
  this.searchСollection = async function searchСollection(collectionName) {
    const r = await supertest(urls.tmdb)
      .get('/3/search/collection')
      .query({ api_key: `${apikeys.apikey_v3}`, query: collectionName });
    return r;
  };
};

export { SearchTMDB };
