setTimeout(() => console.log(1));

Promise.reject(2).catch(console.log);

Promise.resolve().then(() => setTimeout(() => console.log(3)));

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log)

setTimeout(() => console.log(6));

console.log(7);

// 7 2 5 1 4 6 3
// https://www.jsv9000.app/?code=c2V0VGltZW91dChmdW5jdGlvbiBwMSgpIHtyZXR1cm4gY29uc29sZS5sb2coMSl9KTsNCg0KUHJvbWlzZS5yZWplY3QoMikuY2F0Y2goZnVuY3Rpb24gcDIocmVhc29uKSB7cmV0dXJuIGNvbnNvbGUubG9nKHJlYXNvbil9KTsNCg0KUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiBwMygpIHtzZXRUaW1lb3V0KGZ1bmN0aW9uIHAzMygpIHtjb25zb2xlLmxvZygzKSB9KX0pOw0KDQpuZXcgUHJvbWlzZShmdW5jdGlvbiBwNChyZXNvbHZlKSB7DQogICAgc2V0VGltZW91dChmdW5jdGlvbiBwNDQoKSB7cmVzb2x2ZSgpfSkNCn0pLnRoZW4oZnVuY3Rpb24gcDQ0NCgpe2NvbnNvbGUubG9nKDQpfSk7DQoNClByb21pc2UucmVzb2x2ZSg1KS50aGVuKGZ1bmN0aW9uIHA1KGRhdGEpIHtjb25zb2xlLmxvZyhkYXRhKX0pDQoNCnNldFRpbWVvdXQoZnVuY3Rpb24gcDYoKSB7Y29uc29sZS5sb2coNil9KTsNCg0KY29uc29sZS5sb2coNyk7
// setTimeout(function p1() {return console.log(1)});
//
// Promise.reject(2).catch(function p2(reason) {return console.log(reason)});
//
// Promise.resolve().then(function p3() {setTimeout(function p33() {console.log(3) })});
//
// new Promise(function p4(resolve) {
//     setTimeout(function p44() {resolve()})
// }).then(function p444(){console.log(4)});
//
// Promise.resolve(5).then(function p5(data) {console.log(data)})
//
// setTimeout(function p6() {console.log(6)});
//
// console.log(7);