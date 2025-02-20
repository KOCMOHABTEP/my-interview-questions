// Напишите функцию addButton, которая создает кнопку с текстом "Click me" и добавляет её в конец тела документа.
// При клике на кнопку должна выводиться строка "Button clicked!" в консоль.


function addButton () {
    const button = document.createElement('button');
    button.textContent = 'Click me'
    button.addEventListener('click', () => console.log('Button clicked!'))

    document.body.appendChild(button);
}