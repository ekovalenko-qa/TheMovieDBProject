import * as assert from 'assert';
import { apiProvider } from '../../framework';

// eslint-disable-next-line max-len
/**  Тесты для неавторизованного пользователя  для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

describe('api', () => {
  it('1. Поиск фильмов по артисту', async () => {
    const params = {
      query: 'Emma Watson',
    };
    const r = await apiProvider()
      .SearchTMDB()
      .searchByName(params);
    assert.equal(r.body.results[1].name, 'Emma Watson');
    assert.notEqual(r.body.results.length, 0);
  });

  it('2. Поиск коллекции фильмов', async () => {
    const collectionName = 'Showgirls';
    const r = await apiProvider()
      .SearchTMDB()
      .searchСollection(collectionName);
    assert.equal(r.status, 200);
    assert.notEqual(r.body.results.length, 0);
  });

  it('3. Поиск по ключевому слову', async () => {
    const word = 'South';
    const r = await apiProvider()
      .SearchTMDB()
      .searchByKeyword(word);
    assert.equal(r.status, 200);
    assert.notEqual(r.body.results.length, 0);
  });
});
