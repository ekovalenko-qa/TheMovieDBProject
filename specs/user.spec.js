import assert from 'assert';
import { apiProvider } from '../framework';

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
    const r = await apiProvider().MovieTMDB().addRate(authData.sessionId);
    assert.equal(r.status,201);
  });

  it('3. Удалить оценку фильма', async () => {
    const r = await apiProvider().MovieTMDB().deleteRate(authData.sessionId);
    assert.equal(r.status,200);
  });

  it('4. Добавить фильм в избранное', async () => {
    // eslint-disable-next-line max-len
    const r = await apiProvider().AccountTMDB().addToFavorite(authData.sessionId, authData.accountId);
    assert.equal(r.status,201);
  });
});
