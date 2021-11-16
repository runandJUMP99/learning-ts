"use strict";
// const names: Array<string> = [];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });
// promise.then(data => {
//     data.split(" ");
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Mario", hobbies: ["eating"] }, { age: 37 });
console.log(mergedObj.age);
function countAndDescribe(element) {
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
function extractAndConvert(obj, key) {
    return "Value:" + obj[key];
}
extractAndConvert({ name: "mario" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Mario");
textStorage.addItem("Luigi");
textStorage.removeItem("Luigi");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
    // return {title: title, description: description, completeUntil: date};
}
const names = ["Mario", "Luigi"];
// names.push("Toad");
// names.pop();
