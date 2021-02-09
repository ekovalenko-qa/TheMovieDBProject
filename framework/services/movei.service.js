import supertest from 'supertest';
import {apikeys, urls} from '../config';

const headers = {
    'Content-Type': 'application/json',
};

const MovieTMDB = function MovieTMDB() {
    this.getById = async function getById() {
        const id = '76341';
        const r = await supertest(urls.tmdb)
            .get(`/3/movie/${id}?api_key=${apikeys.apikey_v3}`)
            .send();
        return r;
    };
    this.getSimilar = async function getSimilar() {
        const id = '76341';
        const r = await supertest(urls.tmdb)
            .get(`/3/movie/${id}/similar?api_key=${apikeys.apikey_v3}`)
            .send();
        return r;
    };
    this.getTop = async function getTop() {
        const r = await supertest(urls.tmdb)
            .get(`/3/movie/top_rated?api_key=${apikeys.apikey_v3}`);
        return r;
    };
    this.addRate = async function addRate(sessionId) {
        const params = {
            "api_key": apikeys.apikey_v3,
            "session_id": sessionId,
            "value": 8.5,
        };
        const r = await supertest(urls.tmdb)
            .post(`/3/movie/76341/rating?api_key=${apikeys.apikey_v3}&session_id=${sessionId}`)
            .set(headers)
            .send(params);
        // const r = await supertest(urls.tmdb)
        //     .post(`/3/movie/76341/rating`)
        //     .set(headers)
        //     .set('api_key', apikeys.apikey_v3)
        //     .set('session_id', sessionId)
        //     .send(params);
        return r;
    };
    this.deleteRate = async function deleteRate(sessionId) {
        const params = {
            "session_id": sessionId,
        };
        const r = await supertest(urls.tmdb)
            .delete(`/3/movie/76341/rating?api_key=${apikeys.apikey_v3}&session_id=${sessionId}`)
            .set(headers)
        // .send(params);
        return r;
    };
}

export { MovieTMDB };
