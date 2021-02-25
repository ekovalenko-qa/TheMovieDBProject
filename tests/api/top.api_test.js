import * as assert from 'assert';
import { apiProvider } from '../../framework';

// eslint-disable-next-line max-len
/**  Тесты для неавторизованного пользователя  для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

describe('api', () => {
  it('Возвращает топ фильмов', async () => {
    const r = await apiProvider()
      .MovieTMDB()
      .getTop();
    assert.equal(r.status, 200);
  });
});
