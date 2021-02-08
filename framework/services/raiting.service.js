import supertest from 'supertest';
import { apikeys, urls } from '../config';

const headers = {
    'Content-Type': 'application/json',
};

const RatingTMDB = function RatingTMDB() {
    this.addRate = async function addRate(sessionId) {
        const params = {
         //   "api_key": apikeys.apikey_v3,
         //   "session_id": sessionId,
            "value": 8.5,
        };
        const r = await supertest(urls.tmdb)
            .post(`/3/movie/76341/rating?api_key=${apikeys.apikey_v3}&session_id=${sessionId}`)
            .set(headers)
            .send(params);
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

export { RatingTMDB };
