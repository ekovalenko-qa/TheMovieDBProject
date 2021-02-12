import supertest from 'supertest';
import {apikeys, urls} from '../config';

const headers = {
    'Content-Type': 'application/json',
};

const AccountTMDB = function AccountTMDB() {
    this.addToFavorite = async function addToFavorite(sessionId, accountId) {
        const params = {
            media_type: 'movie',
            media_id: 550,
            favorite: true,
        };
        const r = await supertest(urls.tmdb)
            .post(`/3/account/${accountId}/favorite`)
            .set(headers)
            .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${sessionId}` })
            .send(params);
        return r;
    };
}

export { AccountTMDB };
