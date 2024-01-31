console.log("keyof in typescript!!");
function accessValue<T extends object, U extends keyof T>(obj:T, key: U) {
    return `${obj[key]}`;
}
console.log(accessValue({name: 'Ram', age: 27}, "name"));

