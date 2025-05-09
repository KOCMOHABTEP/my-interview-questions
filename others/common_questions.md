# Что происходит, когда пользователь набирает в браузере адрес сайта

Вот краткое и структурированное объяснение того, что происходит, когда пользователь набирает адрес сайта в браузере:

---

1. **Ввод адреса и проверка кэша**
    - Пользователь вводит URL (например, `https://example.com`) в адресную строку браузера.
    - Браузер сначала проверяет локальный кэш, чтобы узнать, не хранится ли уже запрошенная страница или её ресурсы.

2. **DNS-разрешение**
    - Если страница не найдена в кэше, браузер отправляет запрос на разрешение доменного имени (DNS). DNS переводит человеческий адрес (`example.com`) в IP-адрес сервера (например, `93.184.216.34`).
    - Результат может быть получен из локального DNS-кэша, операционной системы, маршрутизатора или внешнего DNS-сервера.

3. **Установка TCP-соединения**
    - После получения IP-адреса, браузер устанавливает TCP-соединение с сервером по протоколу HTTP/HTTPS. Для HTTPS также выполняется TLS-рукопожатие для обеспечения безопасности соединения.

4. **Отправка HTTP-запроса**
    - Браузер отправляет HTTP-запрос (обычно GET) на сервер, указывая запрашиваемый ресурс (URL), версию протокола, заголовки и другие параметры.

5. **Обработка запроса на сервере**
    - Сервер получает запрос, обрабатывает его (например, используя backend-фреймворк или CMS), собирает необходимые данные из базы данных или других источников и формирует ответ.

6. **Получение HTML-документа**
    - Сервер отправляет ответ, который обычно содержит HTML-страницу, а также заголовки с метаданными (например, тип контента, код состояния HTTP).

7. **Рендеринг страницы**
    - Браузер начинает парсить HTML-документ, строить DOM-дерево и выполняет следующие шаги:
        - Загружает внешние ресурсы (CSS, JavaScript, изображения).
        - Применяет стили (CSSOM).
        - Создаёт Render Tree, объединяя DOM и CSSOM.
        - Выполняет layout (расчёт позиций элементов).
        - Производит paint (отрисовку) страницы на экране.

8. **Выполнение JavaScript**
    - Если на странице есть JavaScript, браузер выполняет его, что может изменять DOM, добавлять динамическое содержимое или отправлять дополнительные запросы (AJAX, Fetch API).

9. **Интерактивность**
    - После завершения рендеринга страница становится интерактивной, и пользователь может взаимодействовать с ней (нажимать кнопки, скроллить и т.д.).

---

Этот процесс занимает от нескольких миллисекунд до нескольких секунд, в зависимости от скорости интернета, производительности сервера и сложности страницы. Каждый этап можно оптимизировать для повышения производительности приложения.