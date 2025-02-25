type Bike = {ride: () => void};
type Car = {drive: () => void};
type Plane = {fly: () => void};

type TEntity = Bike | Car | Plane;

const isCar = (entity: TEntity): entity is Car => {
    // @ts-ignore
    return Object.hasOwn(entity, 'drive');
}

const isBike = (entity: TEntity): entity is Bike => {
    // @ts-ignore
    return Object.hasOwn(entity, 'ride');
}


const actWith = (entity: TEntity) => {
    if (isCar(entity)) {
        entity.drive();
    } else if (isBike(entity)) {
        entity.ride();
    } else {

    }


}

const car: Car = {
    drive: () => { console.log('Drive a car') }
}

const bike: Bike = {
    ride: () => { console.log('Ride a bike') }
}

actWith(car);
actWith(bike);