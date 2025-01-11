setTimeout(() => console.log('setTimeout 1'), 0);
Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => setTimeout(() => console.log('setTimeout 2'), 0));
Promise.resolve().then(() => console.log('Promise 2'));
setTimeout(() => console.log('setTimeout 3'), 0);
console.log('final');

// final, pr1, pr2, st1, st3, st2
// Промисы попадают в микротаски, у них приоритет перед макротасками
