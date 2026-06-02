class car {
    constructor(doors, engine , color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} engine and is ${this.color} color! `;
}
}

const car1 = new car(4, "V8", "red");
console.log(car1);
console.log(car1.carStats());   
