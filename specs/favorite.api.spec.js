import assert from 'assert';
import { apiProvider } from '../framework';

// eslint-disable-next-line max-len
/** Тесты для авторизованного пользователя для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

let authData = {};

beforeEach(async () => {
  authData = await apiProvider().AuthTMDB().usernameAuth();
});

describe('api', () => {
  it('Добавить фильм в избранное', async () => {
    const mediaID = 550;
    // eslint-disable-next-line max-len
    const r = await apiProvider().AccountTMDB().addToFavorite(authData.sessionId, authData.accountId, mediaID);
    assert.equal(r.status, 201);
  });
});
