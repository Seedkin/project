let age = 18;
console.log(Number(age), Boolean(age), String(age));

let name = 'Андрей';
console.log(Number(name), Boolean(name), String(name));

let boolean1 = true;
console.log(Number(boolean1), Boolean(boolean1), String(boolean1));

let null1 = null;
console.log(Number(null1), Boolean(null1), String(null1));

let undefined1 = undefined;
console.log(Number(undefined1), Boolean(undefined1), String(undefined1));

let obj = {};
console.log(Number(obj), Boolean(obj), String(obj));

let bigNumber = 123456789n;
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));

let id = Symbol("id");
console.log(Number(id), Boolean(id), String(id));
