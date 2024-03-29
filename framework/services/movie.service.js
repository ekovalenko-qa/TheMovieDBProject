import supertest from 'supertest';
import { apikeys, headers, urls } from '../config';

const MovieTMDB = function MovieTMDB() {
  this.getById = async function getById(movieID) {
    const r = await supertest(urls.tmdb)
      .get(`/3/movie/${movieID}`)
      .query({ api_key: `${apikeys.apikey_v3}` })
      .send();
    return r;
  };
  this.getSimilar = async function getSimilar(movieID) {
    const r = await supertest(urls.tmdb)
      .get(`/3/movie/${movieID}/similar`)
      .query({ api_key: `${apikeys.apikey_v3}`})
      .send();
    return r;
  };
  this.getTop = async function getTop() {
    const r = await supertest(urls.tmdb)
      .get('/3/movie/top_rated')
      .query({ api_key: `${apikeys.apikey_v3}` });
    return r;
  };
  this.addRate = async function addRate(sessionId, movieID, params) {
    const r = await supertest(urls.tmdb)
      .post(`/3/movie/${movieID}/rating`)
      .set(headers)
      .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${sessionId}` })
      .send(params);
    return r;
  };
  this.deleteRate = async function deleteRate(sessionId, movieID) {
    const r = await supertest(urls.tmdb)
      .delete(`/3/movie/${movieID}/rating`)
      .set(headers)
      .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${sessionId}` });
    return r;
  };
};

export { MovieTMDB };
