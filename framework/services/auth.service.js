import supertest from 'supertest';
import { apikeys, userdata, urls } from '../config';


/**Авторизация происходит в 3 этапа:
1. Создание временного токена tempToken
2. Валидация временного токена через имя пользователя и пароль usernameAuth()
3. Создание id сессии session, зависит от временного токена
 В accountId находим id аккаунта

На выходе получаем массив result[<результат валидации>,id сессии, id аккаунта],
 элементы массива могут использоваться в других запросах
*/

const headers = {
    'Content-Type': 'application/json',
};

const AuthTMDB = function AuthTMDB() {
    this.usernameAuth = async function usernameAuth() {
        const result = [];
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
        result[0] = r.body.success;

        const params1 = {
            "request_token": token,
        };
        const session = await supertest(urls.tmdb)
            .post(`/3/authentication/session/new`)
            .set(headers)
            .query({ api_key: `${apikeys.apikey_v3}`})
            .send(params1);
        result[1] = session.body.session_id;
        const account = await supertest(urls.tmdb)
            .get(`/3/account`)
            .query({ api_key: `${apikeys.apikey_v3}`, session_id: `${result[1]}` });
        const accountId = account.body.id;
        result[2] = accountId;
        return result;
    };
}

export { AuthTMDB };
