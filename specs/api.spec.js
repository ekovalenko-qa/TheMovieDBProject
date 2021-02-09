import { test } from '@jest/globals';
import { apiProvider } from '../framework';

/**  Тесты для API с использованием supertest и api провайдера на примере сайта themoviedb.org*/

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

test('7. Проверить авторизацию путем ввода имени пользователя и пароля', async () => {
    const r = await apiProvider().AuthTMDB().usernameAuth();
    expect(r[0])
        .toBe(true);
});

test('8. Добавить оценку фильму', async () => {
    const authData = await apiProvider().AuthTMDB().usernameAuth();
    const sessionId = authData[1];
    const r = await apiProvider().MovieTMDB().addRate(sessionId);
    expect(r.status)
        .toBe(201);
});

test('9. Удалить оценку фильма', async () => {
    const authData = await apiProvider().AuthTMDB().usernameAuth();
    const sessionId = authData[1];
    const r = await apiProvider().MovieTMDB().deleteRate(sessionId);
    expect(r.status)
         .toBe(200);
});

test('10. Добавить фильм в избранное', async () => {
    const authData = await apiProvider().AuthTMDB().usernameAuth();
    const sessionId = authData[1];
    const accountId = authData[2];
    const r = await apiProvider().AccountTMDB().addToFavorite(accountId,sessionId);
    expect(r.status)
        .toBe(201);
});
