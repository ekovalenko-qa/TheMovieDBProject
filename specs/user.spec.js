import { apiProvider } from '../framework';
import assert from 'assert';

/** Тесты для авторизованного пользователя для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

let authData = {};

beforeEach(async () => {
  authData = await apiProvider().AuthTMDB().usernameAuth();
});

describe('API тесты для https://developers.themoviedb.org, роль - пользователь', () => {
  it('1. Проверить авторизацию путем ввода имени пользователя и пароля', async () => {
    assert.equal(authData.status,true);
  });

  it('2. Добавить оценку фильму', async () => {
    const movieID = '76341';
    const params = {
      value: 8.5,
    };
    const r = await apiProvider().MovieTMDB().addRate(authData.sessionId, movieID, params);
    assert.equal(r.status,201);
  });

  it('3. Удалить оценку фильма', async () => {
    const movieID = '76341';
    const r = await apiProvider().MovieTMDB().deleteRate(authData.sessionId, movieID);
    assert.equal(r.status,200);
  });

  it('4. Добавить фильм в избранное', async () => {
    const mediaID = 550;
    // eslint-disable-next-line max-len
    const r = await apiProvider().AccountTMDB().addToFavorite(authData.sessionId, authData.accountId, mediaID);
    assert.equal(r.status,201);
  });
});
