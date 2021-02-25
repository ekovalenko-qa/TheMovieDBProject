import assert from 'assert';
import { apiProvider } from '../../framework';

// eslint-disable-next-line max-len
/** Тесты для авторизованного пользователя для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

let authData = {};

beforeEach(async () => {
  authData = await apiProvider().AuthTMDB().usernameAuth();
});

describe('api', () => {
  it('Добавить оценку фильму', async () => {
    const movieID = '76341';
    const params = {
      value: 8.5,
    };
    const r = await apiProvider().MovieTMDB().addRate(authData.sessionId, movieID, params);
    assert.equal(r.status, 201);
  });

  it('Удалить оценку фильма', async () => {
    const movieID = '76341';
    const r = await apiProvider().MovieTMDB().deleteRate(authData.sessionId, movieID);
    assert.equal(r.status, 200);
  });
});
