// Кастомный debounce
const debounce = (cb, delay) => {
    let timer;

    return function (...args) {
        const context = this;

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => cb.apply(context, args), delay);
    }
}