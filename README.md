- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

Api endpoints:

 Production server - https://back-end-2saw.onrender.com


POST - /api/auth/register
{
    "name": "Yevhenii",
    "email": "mail@gmail.com",
    "password": "123456"
}


POST - /api/auth/login
{
    "email": "mail@gmail.com",
    "password": "123456"
}


GET - /api/auth/current


POST - /api/auth/logout


GET - /api/contacts

