class Car {
    constructor(doors, engine , color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} engine and is ${this.color} color! `;
}

    static totalDoors(Car1, Car2){
        const doors1 = Car1.doors;
        const doors2 = Car2.doors;

        return doors1 + doors2;
    }
}

const cx1 = new Car(4, "V8", "red");
const cx2 = new Car(2, "v2", "blue");

console.log(cx1);
console.log(cx1.carStats()); 
// console.log(cx2);
// console.log(cx2.carStats());
// console.log(Car.totalDoors(cx1, cx2));

class suv extends Car{
    constructors(doors, engine, color, brand, carStats){
        super(doors, engine, color, carStats);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;
    }
}

const newcar = new suv(4, "V6", "black", "This is a SUV car");
console.log(newcar);

