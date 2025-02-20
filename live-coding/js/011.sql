-- Предположим, что у вас есть таблица users с полями id, name и email. Напишите SQL-запросы для следующих операций:
--
-- Добавить нового пользователя.
-- Получить всех пользователей.
-- Обновить email пользователя по его id.
-- Удалить пользователя по его id.

INSERT INTO users(name, email) VALUES ('John', 'test@mail.ru');

SELECT * FROM users;

UPDATE users SET email='test' WHERE id=1;

DELETE FROM users WHERE id=1;