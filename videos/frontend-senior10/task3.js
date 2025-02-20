// Что такое чистая функция?
// 1. При одних и тех же параметрах, возвращает всегда одно и то же значение
// 2. Не содержит побочных эффектов (без асинхронщины, без таймаутов и тд)


let x = 2;

const add = async (params, y) => {
    // Чтобы была чистая функция
    // params.value = y;
    // y += y + Math.random(params.value);
    // x += y;

    // console.log('doubling', y);

    // const {data} = await axios({method: 'get', url: '/'});

    // const elem = document.getElementById('elem');
    // const width = elem.getBoundingClientRect().width;

    // return x + data + width;
}

add({value: 4}, 1);
