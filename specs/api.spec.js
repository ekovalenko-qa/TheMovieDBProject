import { test } from '@jest/globals';
import { apiProvider } from '../framework';

/**  Тесты для API с использованием supertest и api провайдера на примере сайта themoviedb*/

test('1. Возвращает топ фильмов', async () => {
    const r = await apiProvider()
        .InfoTMDB()
        .top();
    expect(r.status)
        .toBe(200);
});

test('2. Поиск фильмов по артисту', async () => {
    const params = {
        query: 'Emma Watson',
    };
    const r = await apiProvider()
        .InfoTMDB()
        .search(params);
    expect(r.body.results[1].name)
        .toBe('Emma Watson');
});

test('3. Возвращает информацию о фильме по id', async () => {
    const r = await apiProvider()
        .InfoTMDB()
        .info();
    expect(r.status)
        .toBe(200);
});

test('4. Поиск по слову', async () => {
    const r = await apiProvider()
        .InfoTMDB()
        .searchByKeyword();
    expect(r.status)
        .toBe(200);
});

test('5. Проверить авторизацию путем ввода имени пользователя и пароля', async () => {
    const r = await apiProvider().AuthTMDB().usernameAuth();
    expect(r[1])
        .toBe(true);
});

test('6. Добавить оценку фильму', async () => {
    const authData = await apiProvider().AuthTMDB().usernameAuth();
    const sessionId = authData[2];
    const r = await apiProvider().RatingTMDB().addRate(sessionId);
    expect(r.status)
        .toBe(201);
});

test('7. Удалить свою оценку фильма', async () => {
    const authData = await apiProvider().AuthTMDB().usernameAuth();
    const sessionId = authData[2];
    const r = await apiProvider().RatingTMDB().deleteRate(sessionId);
    expect(r.status)
         .toBe(200);
});
