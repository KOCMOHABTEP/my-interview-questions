function fetchData (url) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 1000;
        const isError = Math.random() < 0.3;

        setTimeout(() => {
            if (isError) {
                console.log(`Запрос к ${url} завершился ошибкой`)
                reject(new Error(`Ошибка при запросе к ${url}`))
            } else {
                console.log(`Запрос выполнен успешно`);
                resolve(`Данные от ${url}`);
            }
        }, delay)
    })
}

/**
 * У нас есть система, которая отправляет запросы к внешнему API для получения данных.
 * Однако API имеет ограничение: оно может обрабатывать только 3 запроса одновременно.
 * Ваша задача — реализовать систему приоритезации запросов, чтобы более важные запросы выполнялись первыми.
 * Если запрос завершился ошибкой, его надо ретраить (максимум - 2 раза)
 */
class RequestProcessor {
    constructor() {
        this.queue = []; // Очередь запросов
        this.activeRequests = new Set(); // Текущие активные запросы
        this.maxConcurrentRequests = 3; // Максимальное количество одновременных запросов
        this.tries = 2; // Максимальное количество попыток ретрая
    }

    /**
     * Добавляет запрос в очередь и сортирует её по приоритету
     * @param {Object} request - Объект запроса
     */
    process(request) {
        this.queue.push({ ...request, attempts: 0 }); // Добавляем поле attempts для отслеживания попыток
        this.queue.sort((a, b) => b.priority - a.priority); // Сортировка по убыванию приоритета
        this.processQueue(); // Проверяем, можем ли начать выполнение нового запроса
    }

    /**
     * Обрабатывает очередь запросов
     */
    processQueue() {
        while (this.activeRequests.size < this.maxConcurrentRequests && this.queue.length > 0) {
            const nextRequest = this.queue.shift(); // Берем первый запрос из очереди
            this.execute(nextRequest); // Выполняем запрос
        }
    }

    /**
     * Выполняет запрос
     * @param {Object} request - Объект запроса
     */
    execute(request) {
        console.log(`Запускается запрос ${request.id} с приоритетом ${request.priority}`);
        this.activeRequests.add(request.id);

        fetchData(request.url)
            .then(response => {
                console.log(`Успешный ответ для запроса ${request.id}:`, response);
            })
            .catch(error => {
                if (request.attempts < this.tries) {
                    console.log(`Ошибка при выполнении запроса ${request.id}. Попытка ${request.attempts + 1} из ${this.tries}`);
                    request.attempts += 1;
                    this.queue.push(request); // Возвращаем запрос в очередь для повторной попытки
                    this.queue.sort((a, b) => b.priority - a.priority); // Пересортируем очередь
                } else {
                    console.log(`Запрос ${request.id} превысил лимит попыток.`);
                }
            })
            .finally(() => {
                this.activeRequests.delete(request.id); // Удаляем запрос из активных
                this.processQueue(); // Проверяем, можем ли начать новый запрос
            });
    }
}

const processor = new RequestProcessor();

const requests = [
    { id: 1, url: 'https://api.example.com/user/1', priority: 3 },
    { id: 2, url: 'https://api.example.com/user/2', priority: 1 },
    { id: 3, url: 'https://api.example.com/user/3', priority: 2 },
    { id: 4, url: 'https://api.example.com/user/4', priority: 5 },
    { id: 5, url: 'https://api.example.com/user/5', priority: 3 },
];

// Динамически добавляем запросы через случайные интервалы времени
requests.forEach((request, index) => {
    const delay = Math.floor(Math.random() * 1500) + 500; // Задержка от 0.5 до 2 секунд

    setTimeout(() => {
        processor.process(request);
    }, delay * index);
});