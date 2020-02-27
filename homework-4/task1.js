var arr = [1, 2, 3, 4, 5];
var result = 0;
function sum (arr) {
    for (i = 0; i < arr.length; i++)
    result += arr[i];
    return result;
}
result = sum (arr);
console.log (result);


var array = [10, 4, 3, 2, 1];
var result1 = 0;
array.forEach (function (item) {
    result1 += item;
}
);
console.log (result1);