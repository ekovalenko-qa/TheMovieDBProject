import * as assert from 'assert';
import { apiProvider } from '../framework';

// eslint-disable-next-line max-len
/**  Тесты для неавторизованного пользователя  для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

describe('api', () => {
  it('Список похожих фильмов', async () => {
    const movieID = '76341';
    const r = await apiProvider()
      .MovieTMDB()
      .getSimilar(movieID);
    assert.equal(r.status, 200);
  });
});
