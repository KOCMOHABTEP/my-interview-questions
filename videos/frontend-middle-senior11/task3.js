const run = () => {

    {
        // 1
        const {foo, bar} = {foo: 1, bar: 2};
        console.log('1)', {foo, bar }); // {foo: , bar: }
    }

    {
        // 2
        const {foo: bar, bar: foo} = {foo: 1, bar: 2};
        console.log('2)', {foo, bar}); // {foo: , bar: }
    }

    {
        // 3
        const {foo: [bar], bar: foo} = {foo: [1], bar: [2]};
        console.log('3)', {foo, bar}); // {foo: , bar: }
    }

    {
        // 4
        const {foo: [bar], bar: foo} = {foo: [1], bar: [{baz: 3}]};
        console.log('4)', {foo, bar}); // {foo: , bar: }
    }

    {
        // 5
        const {foo: [bar], bar: [{baz: foo}]} = {foo: [1], bar: [{baz: 3}]};
        console.log('5)', {foo, bar}); // {foo: , bar: }
    }

    {
        // 6
        const value = {
            foo: [{baz: 1}],
            baz: 2
        }

        const {foo: [{baz: foo}], bar: {baz: bar} = {baz: 3} } = value;
        console.log('6)', {foo, bar}); // {foo: , bar: }
    }
}

run();

/**
 * 1) { foo: 1, bar: 2 }
 * 2) { foo: 2, bar: 1 }
 * 3) { foo: [ 2 ], bar: 1 }
 * 4) { foo: [ { baz: 3 } ], bar: 1 }
 * 5) { foo: 3, bar: 1 }
 * 6) { foo: 1, bar: 3 }
 */