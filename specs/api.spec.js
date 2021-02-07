import { test } from '@jest/globals';
import supertest from 'supertest';
import { apiProvider } from '../framework';
import { apikeys} from "../framework/config";

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

test('4. Получить временный токен', async () => {
    const r = await apiProvider()
        .AuthTMDB()
        .tempToken();
    //console.log(r.body.request_token);
    console.log(r);
   // expect(r.status)
     //   .toBe(200);
});


test.skip('2', async () => {
    const params = {
        api_key: '45186a994a717d2a0603271ff89e75b6',
        query: 'Emma Watson',
    };
    const r = await supertest('https://api.themoviedb.org')
        .get(`/3/search/person?api_key=${apikeys.apikey_v3}`)
        .set('query', 'Emma Watson');

    expect(r.status)
        .toBe(200);
});
