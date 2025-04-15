function greet(greeting) {
    setTimeout(function () {
        console.log(`${greeting} ${this.firstName} ${this.lastName}`);
    }, 100)
}

let user = {firstName: 'John', lastName: 'Boon'};

greet('Hello!');
// greet.bind(user)('Hello');
