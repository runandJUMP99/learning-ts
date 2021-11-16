// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

// promise.then(data => {
//     data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: "Mario", hobbies: ["eating"]}, {age: 37});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";

    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements.";
    }

    return [element, descriptionText];
}

console.log(countAndDescribe("hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value:" + obj[key];
}

extractAndConvert({name: "mario"}, "name");

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }
    
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Mario");
textStorage.addItem("Luigi");
textStorage.removeItem("Luigi");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: "Mario"});
// objStorage.addItem({name: "Luigi"});
// objStorage.removeItem({name: "Mario"});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
    
    // return {title: title, description: description, completeUntil: date};
}

const names: Readonly<string[]> = ["Mario", "Luigi"];
// names.push("Toad");
// names.pop();