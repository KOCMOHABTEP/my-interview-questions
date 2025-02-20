function Count() {
    let counter = 0;

    return () => {
        console.log(counter++);
    }
}

const c = new Count();

c(); // ? 0
c(); // ? 1

c.counter = 0;

c(); //

const b = new Count();

b() //