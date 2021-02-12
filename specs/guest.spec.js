import { test } from '@jest/globals';
import { apiProvider } from '../framework';

/**  Тесты для неавторизованного пользователя  для API с использованием supertest и api провайдера на примере сайта themoviedb.org*/

describe('API тесты для https://developers.themoviedb.org, роль - гость', () => {
    test('1. Возвращает топ фильмов', async () => {
        const r = await apiProvider()
            .MovieTMDB()
            .getTop();
        expect(r.status)
            .toBe(200);
    });

    test('2. Основная информация о фильме по id', async () => {
        const r = await apiProvider()
            .MovieTMDB()
            .getById();
        expect(r.status)
            .toBe(200);
    });

    test('3. Список похожих фильмов', async () => {
        const r = await apiProvider()
            .MovieTMDB()
            .getSimilar();
        expect(r.status)
            .toBe(200);
    });

    test('4. Поиск фильмов по артисту', async () => {
        const params = {
            query: 'Emma Watson',
        };
        const r = await apiProvider()
            .SearchTMDB()
            .searchByName(params);
        expect(r.body.results[1].name)
            .toBe('Emma Watson');
    });

    test('5. Поиск коллекции фильмов', async () => {
        const r = await apiProvider()
            .SearchTMDB()
            .searchСollection();
        expect(r.status)
            .toBe(200);
    });

    test('6. Поиск по ключевому слову', async () => {
        const r = await apiProvider()
            .SearchTMDB()
            .searchByKeyword();
        expect(r.status)
            .toBe(200);
    });
});
