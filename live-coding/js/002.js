// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    const hash = {};

    for (const item of array) {
        const {name, city} = item;

        if (!hash[city]) {
            hash[city] = name;
            continue;
        }

        if (Array.isArray(hash[city])) {
            hash[city].push(name);
        }

        if (hash[city]) {
            hash[city] = [hash[city], name];
        }

    }

    return hash;
}

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

console.log(groupByCity(people))