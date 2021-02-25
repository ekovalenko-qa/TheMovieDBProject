import * as assert from 'assert';
import { apiProvider } from '../../framework';

// eslint-disable-next-line max-len
/**  Тесты для неавторизованного пользователя  для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

describe('api', () => {
  it('Основная информация о фильме по id', async () => {
    const movieID = '76341';
    const r = await apiProvider()
      .MovieTMDB()
      .getById(movieID);
    assert.equal(r.status, 200);
  });
});
