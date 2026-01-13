let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log(arr);

let arr_1 = arr.map((num) => num * 3);
console.log(arr_1);

let arr_filter = arr.filter((b) => b>3);
console.log(arr_filter);

let arr_copy = [...arr];
console.log(arr_copy);

arr_copy.pop();
console.log(arr_copy);
console.log(arr);