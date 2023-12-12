- `npm start` &mdash; server start in production mode
- `npm run start:dev` &mdash; start the server in development mode
- `npm run lint` &mdash; run a code check run with eslint, must run before each PR and fix all linter errors
- `npm lint:fix` &mdash; the same linter check, but with automatic fixes for simple errors

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

