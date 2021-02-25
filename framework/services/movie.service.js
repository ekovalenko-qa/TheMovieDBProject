import supertest from 'supertest';
import { apikeys, urls } from '../config';

const headers = {
  'Content-Type': 'application/json',
};

const MovieTMDB = function MovieTMDB() {
  this.getById = async function getById(id) {
    //const id = '76341';
    const r = await supertest(urls.tmdb)
      .get(`/3/movie/${id}`)
      .query({ api_key: `${apikeys.apikey_v3}` })
      .send();
    return r;
  };
  this.getSimilar = async function getSimilar(id) {
    //const id = '76341';
    const r = await supertest(urls.tmdb)
      .get(`/3/movie/${id}/similar`)
      .query({ api_key: `${apikeys.apikey_v3}` })
      .send();
    return r;
  };
  this.getTop = async function getTop() {
    const r = await supertest(urls.tmdb)
      .get('/3/movie/top_rated')
      .query({ api_key: `${apikeys.apikey_v3}` });
    return r;
  };
  this.addRate = async function addRate(sessionId) {
    const params = {
      value: 8.5,
    };
    const r = await supertest(urls.tmdb)
      .post('/3/movie/76341/rating')
      .set(headers)
      .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${sessionId}` })
      .send(params);
    return r;
  };
  this.deleteRate = async function deleteRate(sessionId) {
    const r = await supertest(urls.tmdb)
      .delete('/3/movie/76341/rating')
      .set(headers)
      .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${sessionId}` });
    return r;
  };
};

export { MovieTMDB };
