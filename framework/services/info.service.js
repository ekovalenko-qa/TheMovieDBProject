import supertest from 'supertest';
import { decorateService } from '../../lib/decorate';
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
           //.get(`/3/search/personapi_key=${apikeys.apikey_v3}`)
           //.send(params);
        return r;
    };
    this.info = async function info() {
        const id = '76341';
        const r = await supertest(urls.tmdb)
            .get(`/3/movie/${id}?api_key=${apikeys.apikey_v3}`)
            .send();
        return r;
    };
};

decorateService(InfoTMDB);

export { InfoTMDB };

