import { apikeys, urls } from '../config';
import supertest from 'supertest';


// Авторизация происходит в 3 этапа:
// 1. Создание временного токена TempToken()
// 2. Валидация временного токена через имя пользователя и пароль usernameAuth()
// 3. Создание id сессии, зависит от временного токена
// На выходе получаем массив result[token, <результат валидации>,id сессии]

const headers = {
    'Content-Type': 'application/json',
};

const TempToken = async function TempToken() {
       const r = await supertest(urls.tmdb)
            .get(`/3/authentication/token/new?api_key=${apikeys.apikey_v3}`);
        const token = r.body.request_token;
        return token;
}

const AuthTMDB = function AuthTMDB() {
    this.usernameAuth = async function usernameAuth() {
        const result = [];
        const token = await TempToken();
        result[0] = token;

        const params = {
            "username": "Fox.red",
            "password": "q12345",
            "request_token": token,
        };
        const r = await supertest(urls.tmdb)
            .post(`/3/authentication/token/validate_with_login?api_key=${apikeys.apikey_v3}`)
            .set(headers)
            .send(params);
        result[1] = r.body.success;

        const params1 = {
            "request_token": token,
        };
        const session = await supertest(urls.tmdb)
            .post(`/3/authentication/session/new?api_key=${apikeys.apikey_v3}`)
            .set(headers)
            .send(params1);
        result[2] = session.body.session_id;
        return result;
    };
}

export { AuthTMDB };
