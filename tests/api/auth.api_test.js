import assert from 'assert';
import { apiProvider } from '../../framework';

// eslint-disable-next-line max-len
/** Тесты для авторизованного пользователя для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

describe('api', () => {
  it('Проверить авторизацию путем ввода имени пользователя и пароля', async () => {
    const authData = await apiProvider().AuthTMDB().usernameAuth();
    assert.equal(authData.status, true);
  });
});
