Реализован собственный фреймворк без Express и других библиотек.

 Структура
- framework/Application.js — сервер, middleware, маршрутизация
- framework/Router.js — маршруты: get, post, put, patch, delete
- index.js — запуск сервера и тестовый роут

 Возможности
- app.use() — middleware
- app.addRouter() — подключение роутов
- app.listen(PORT) — запуск сервера
- Поддержка req.body, req.query
- Методы res.send(), res.json(), res.status()

 Запуск
npm install
npm start
