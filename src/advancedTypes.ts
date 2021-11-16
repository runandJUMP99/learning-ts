type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Mario",
    privileges: ["pipes"],
    startDate: new Date()
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function addTwo(a: number, b: number): number; //function overloads
function addTwo(a: string, b:string): string;
function addTwo(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addTwo("Mario", "Luigi");

const fetchedUserData = { // function chaining
    id: "u1",
    name: "Mario",
    job: {title: "CEO", description: "My own company"}
};

console.log(fetchedUserData?.job?.title);

const userInput = "";

const storedData = userInput || "DEFAULT";

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log("Name: " + emp.name);

//     if ("privileges" in emp) {
//         console.log("Priviliges: " + emp.privileges);
//     }
    
//     if ("startDate" in emp) {
//         console.log("Start Date: " + emp.startDate);
//     }
// }

// printEmployeeInformation({name: "Mario", startDate: new Date()});

// class Car {
//     drive() {
//         console.log("Driving...");
//     }
// }

// class Truck {
//     drive() {
//         console.log("Driving a truck...");
//     }

//     loadCargo(amount: number) {
//         console.log("Loading cargo..." + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();

//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: "bird";
//     flyingSpeed: number;
// }

// interface Horse {
//     type: "horse";
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;

//     switch(animal.type) {
//         case "bird":
//             speed = animal.flyingSpeed;
//             break;    
//         case "horse":
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log("Moving with speed: " + speed);
// }

// moveAnimal({type: "bird", flyingSpeed: 10});

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

// userInputElement.value = "Hi there!";

// interface ErrorContainer { // {email: "Not a valid email", username: "must start with a character"}
//     [key: string]: string;
// }

// const erroBag: ErrorContainer = {
//     email: "Not a valid email!",
//     username: "Must start with a capital character!"
// };