class  Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep"
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle{


    constructor(make, model, year){
        super(make, model, year)
        this.wheels = 4
    }

   

}

class MotorCycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }

    revEngine(){
        return "VROOM!!!";
    }
}



class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVeh){
        if(!newVeh instanceof Vehicle){
            return "Only vehicles are allowed in here"
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we are full"
        }
        this.vehicles.push(newVeh);
        return "Vehicle added."
    }


}




let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999)
myFirstVehicle.honk();  //Beep
myFirstVehicle.toString(); //This vehicle is a Honda Monster Truck from 1999.
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstVehicle.toString() // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk(); // "Beep"
myFirstCar.wheels // 4

let myFirstMotorCycle = new MotorCycle("Honda", "Nighthawk", 2000);

myFirstMotorCycle.toString(); // "The vehicle is a Honda Nighthawk from 2000."
myFirstMotorCycle.honk();     // "Beep."
myFirstMotorCycle.revEngine(); // "VROOM!!!"
myFirstMotorCycle.numWheels;  // 2


let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new MotorCycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new MotorCycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."



