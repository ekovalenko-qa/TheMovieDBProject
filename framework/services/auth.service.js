import supertest from 'supertest';
import { apikeys, userdata, urls } from '../config';


/**Авторизация происходит в 3 этапа:
1. Создание временного токена tempToken
2. Валидация временного токена через имя пользователя и пароль, status (true/false)
3. Создание id сессии sessionId, зависит от временного токена
 В accountId находим id аккаунта. На выходе получаем объект
 authData = {
 status: <результат валидации>,
 sessionId: <id сессии>,
 accountId: <id аккаунта}>
 }
 */

const headers = {
    'Content-Type': 'application/json',
};

const AuthTMDB = function AuthTMDB() {
    this.usernameAuth = async function usernameAuth() {
        let authData = {};
        const tempToken = await supertest(urls.tmdb)
             .get(`/3/authentication/token/new`)
             .query({ api_key: `${apikeys.apikey_v3}`});
        const token = tempToken.body.request_token;
        const params = {
            "username": userdata.username,
            "password": userdata.password,
            "request_token": token,
        };
        const r = await supertest(urls.tmdb)
            .post(`/3/authentication/token/validate_with_login`)
            .set(headers)
            .query({ api_key: `${apikeys.apikey_v3}`})
            .send(params);
        authData.status = r.body.success;

        const params1 = {
            "request_token": token,
        };
        const session = await supertest(urls.tmdb)
            .post(`/3/authentication/session/new`)
            .set(headers)
            .query({ api_key: `${apikeys.apikey_v3}`})
            .send(params1);
        authData.sessionId = session.body.session_id;
        const account = await supertest(urls.tmdb)
            .get(`/3/account`)
            .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${authData.sessionId}` });
        authData.accountId = account.body.id;
        return authData;
    };
}

export { AuthTMDB };
