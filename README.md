<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# Запуск докер-компаса
$ docker-compose up -d

# Сделать миграцию 
$ npm run migration:run

# Билд проекта
$ npm run build

# Запуск проекта
$ npm run start


## Run tests

```bash
#tests
$ npm run test

 
```

## Примеры запросов в постмане их curl

 ## User create

 curl --location 'http://localhost:3000/user/createUser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "sven@bk.ru",
    "name": "denis",
    "password": "denis"
}'

 ## User get by email

 curl --location --request GET 'http://localhost:3000/user/getUserByEmail' \
--data-raw '{
    "email": "sven@bk.ru"
}'


 ## User authorization

 curl --location 'http://localhost:3000/user/singIn' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "sven@bk.ru",
    "password": "denis"
}'

 ## User update

curl --location --request PATCH 'http://localhost:3000/user/updateUser' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVuaXMiLCJlbWFpbCI6InN2ZW5AYmsucnUiLCJpZCI6MSwiaWF0IjoxNzMwNTUyMjMzLCJleHAiOjE3MzA1NTU4MzN9.6zQQG4JKt-Yp8GtuBJadLi9smLl6mD4vPEfpgQASPyI' \
--data-raw '{
        "email": "sven@bk.ru",
        "name": "Super denis",
        "userId": 3
}'

 ## User delete

curl --location --request DELETE 'http://localhost:3000/user/deleteUser' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVuaXMiLCJlbWFpbCI6InN2ZW5AYmsucnUiLCJpZCI6MSwiaWF0IjoxNzMwNTUyMjMzLCJleHAiOjE3MzA1NTU4MzN9.6zQQG4JKt-Yp8GtuBJadLi9smLl6mD4vPEfpgQASPyI' \
--data-raw '{
    "email": "sven@bk.ru"
}'

 ## Article create

curl --location 'http://localhost:3000/article/createArticle' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVuaXMiLCJlbWFpbCI6InN2ZW5AYmsucnUiLCJpZCI6MSwiaWF0IjoxNzMwNTQ4ODU4LCJleHAiOjE3MzA1NTI0NTh9.79y4ZVHBV2IFi-Yinaj4z8p3e3M2rDnnDE2BK2ruguw' \
--data-raw '{
  "name": "super",
  "decription": "super denis",
  "email": "den@bk.ru"
}'

 ## Article get with sort (if you want)

curl --location --request GET 'http://localhost:3000/article/getArticles' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVuaXMiLCJlbWFpbCI6InN2ZW5AYmsucnUiLCJpZCI6MSwiaWF0IjoxNzMwNTQ4ODU4LCJleHAiOjE3MzA1NTI0NTh9.79y4ZVHBV2IFi-Yinaj4z8p3e3M2rDnnDE2BK2ruguw' \
--data '{
  "name": "denis",
   "sort": true,
   "sortParam":  "email"
}'

 ## Article update

curl --location --request PATCH 'http://localhost:3000/article/updateArticle' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3VwZXIgZGVuaXMiLCJlbWFpbCI6InN2ZW5AYmsucnUiLCJpZCI6MywiaWF0IjoxNzMwNTUzODc3LCJleHAiOjE3MzA1NTc0Nzd9.i4yhDZtv3k6r2MD2uXAhINx1foTf2SDkJeDhQEX-5Rg' \
--data '{
  "name": "test",
  "articleId": 1
}'

 ## Article delete

curl --location --request DELETE 'http://localhost:3000/article/deleteArticle' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3VwZXIgZGVuaXMiLCJlbWFpbCI6InN2ZW5AYmsucnUiLCJpZCI6MywiaWF0IjoxNzMwNTUzODc3LCJleHAiOjE3MzA1NTc0Nzd9.i4yhDZtv3k6r2MD2uXAhINx1foTf2SDkJeDhQEX-5Rg' \
--data '{
    "articleId": 1
}'


## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).