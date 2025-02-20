/**
 * Написать декоратор для функции, который ограничивает число вызовов.
 *
 * callLimit(fn, limit, callback)
 * fn - функция, которую декорируем
 * limit - максимальное число вызовов;
 * callback - вызывается когда совершен последний вызов. Опционально
 */

function callLimit(fn, limit, callback) {
    let callsCount = 0;


    const func =  function (...args)  {

        if (callsCount === limit) {
            if (callback) {
                setTimeout(() => callback(), 0);
                return fn(...args);
            }
        }
        callsCount+=1;

        return fn(...args);
    }

    func.reset = () => {
        callsCount = 0;
    }


    return func;
}


function log(title, message) {
    console.log(title + ': ' + message);
}

var logLimited = callLimit(log,3 );
logLimited('title', 'desc')
logLimited('title2', 'desc')
logLimited('title3', 'desc')
logLimited('title4', 'desc')
logLimited.reset();

logLimited('title5', 'desc')
logLimited('title6', 'desc')
logLimited('title7', 'desc')