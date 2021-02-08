import supertest from 'supertest';
import {apikeys, urls} from '../config';

const InfoTMDB = function InfoTMDB() {
    this.top = async function top() {
        const r = await supertest(urls.tmdb)
            .get(`/3/movie/top_rated?api_key=${apikeys.apikey_v3}`);

        return r;
    };
    this.search = async function search(params) {
        const r = await supertest(urls.tmdb)
            .get(`/3/search/person?api_key=${apikeys.apikey_v3}&query='Emma%20Watson'`);
        return r;
    };
    this.info = async function info() {
        const id = '76341';
        const r = await supertest(urls.tmdb)
            .get(`/3/movie/${id}?api_key=${apikeys.apikey_v3}`)
            .send();
        return r;
    };
    this.searchByKeyword = async function searchByKeyword() {
        const r = await supertest(urls.tmdb)
            .get(`/3/search/keyword?api_key=${apikeys.apikey_v3}&query='South'`);
        return r;
    };
};

export { InfoTMDB };

