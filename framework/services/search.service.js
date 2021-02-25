import supertest from 'supertest';
import { apikeys, urls } from '../config';

const SearchTMDB = function SearchTMDB() {
  this.searchByName = async function searchByName(params) {
    const r = await supertest(urls.tmdb)
      .get('/3/search/person')
      .query({ api_key: `${apikeys.apikey_v3}`, query: 'Emma Watson' });
    return r;
  };
  this.searchByKeyword = async function searchByKeyword() {
    const r = await supertest(urls.tmdb)
      .get('/3/search/keyword')
      .query({ api_key: `${apikeys.apikey_v3}`, query: 'South' });
    return r;
  };
  this.searchСollection = async function searchСollection() {
    const r = await supertest(urls.tmdb)
      .get('/3/search/collection')
      .query({ api_key: `${apikeys.apikey_v3}`, query: 'Showgirls' });
    return r;
  };
};

export { SearchTMDB };
