## Инструкция по развёртыванию
- установить зависимости
- создать файл config.js в корневой папке с экспортом констант: PORT - порт на котором откроется localhost, TOKEN - токен бота (получить в телеге у @BotFather), idChat - id чата с пользаком (можно глянуть в ctx.from.id)
- запустить через заготовленный скрипт "start" или nodemon app.js 

## Файлы
- app.js корневой файл для запуска бота
- db.js эмитация базы данных для хранения задач
- keyboards.js кнопки выбора действий
- test.js ручная отправка сообщений в чаты

## Ссылки
- дока https://telegraf.js.org/classes/Telegraf-1.html
- примеры https://github.com/feathers-studio/telegraf-docs/tree/master/examples
- телеграм канал https://t.me/telegrafjs_ru/1
