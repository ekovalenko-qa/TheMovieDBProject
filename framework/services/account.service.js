import supertest from 'supertest';
import {apikeys, urls} from '../config';

const headers = {
    'Content-Type': 'application/json',
};

const AccountTMDB = function AccountTMDB() {
    this.addToFavorite = async function addToFavorite(accountId,sessionId) {
        const params = {
            "media_type": "movie",
            "media_id": 550,
            "favorite": true
        };
        const r = await supertest(urls.tmdb)
            .post(`/3/account/${accountId}/favorite?api_key=${apikeys.apikey_v3}&session_id=${sessionId}`)
            .set(headers)
            .send(params);
        return r;
        // вариант ниже не работает, документация https://developers.themoviedb.org/3/account/mark-as-favorite
        // const query = {
        //     "api_key": apikeys.apikey_v3,
        //     "session_id": sessionId,
        // };
        // const r = await supertest(urls.tmdb)
        //     .post(`/3/account/${accountId}/favorite`)
        //     .set(headers)
        //     .send(params)
        //     .send(query);
        // return r;
    };
}

export { AccountTMDB };
