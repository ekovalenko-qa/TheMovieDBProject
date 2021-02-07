import supertest from 'supertest';
import { decorateService } from '../../lib/decorate';
import {apikeys, urls} from '../config';

const headers = {
    'Content-Type': 'application/json',
};

const AuthTMDB = function AuthTMDB() {
    this.tempToken = async function tempToken() {
        const r = await supertest(urls.tmdb)
            .get(`/3/authentication/token/new?api_key=${apikeys.apikey_v3}`);
        const token = r.body.request_token;
        return token;
    };
    this.sessionId = async function sessionId() {
        const r = await supertest(urls.tmdb)
            .post(`/3/authentication/session/new?api_key=${apikeys.apikey_v3}`)
            .set(headers)
        return r;
    };
}

decorateService(AuthTMDB);

export { AuthTMDB };
