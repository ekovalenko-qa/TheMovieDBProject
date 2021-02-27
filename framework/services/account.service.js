import supertest from 'supertest';
import { apikeys, headers, urls } from '../config';

const AccountTMDB = function AccountTMDB() {
  this.addToFavorite = async function addToFavorite(sessionId, accountId, mediaID) {
    const params = {
      media_type: 'movie',
      media_id: mediaID,
      favorite: true,
    };
    const r = await supertest(urls.tmdb)
      .post(`/3/account/${accountId}/favorite`)
      .set(headers)
      .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${sessionId}` })
      .send(params);
    return r;
  };
};

export { AccountTMDB };
