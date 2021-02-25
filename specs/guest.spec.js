import * as assert from 'assert';
import { apiProvider } from '../framework';

// eslint-disable-next-line max-len
/**  Тесты для неавторизованного пользователя  для API с использованием supertest и api провайдера на примере сайта themoviedb.org */

describe('API тесты для https://developers.themoviedb.org, роль - гость', () => {
  it('1. Возвращает топ фильмов', async () => {
    const r = await apiProvider()
      .MovieTMDB()
      .getTop();
    assert.equal(r.status,200);
  });

  it('2. Основная информация о фильме по id', async () => {
    const movieID = '76341';
    const r = await apiProvider()
      .MovieTMDB()
      .getById(movieID);
    assert.equal(r.status,200);
  });

  it('3. Список похожих фильмов', async () => {
    const movieID = '76341';
    const r = await apiProvider()
      .MovieTMDB()
      .getSimilar(movieID);
    assert.equal(r.status,200);
  });

  it('4. Поиск фильмов по артисту', async () => {
    const params = {
      query: 'Emma Watson',
    };
    const r = await apiProvider()
      .SearchTMDB()
      .searchByName(params);
    assert.equal(r.body.results[1].name,'Emma Watson');
  });

  it('5. Поиск коллекции фильмов', async () => {
    const collectionName = 'Showgirls';
    const r = await apiProvider()
      .SearchTMDB()
      .searchСollection(collectionName);
    assert.equal(r.status,200);
  });

  it('6. Поиск по ключевому слову', async () => {
    const word = 'South';
    const r = await apiProvider()
      .SearchTMDB()
      .searchByKeyword(word);
    assert.equal(r.status,200);
  });
});
