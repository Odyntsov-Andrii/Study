{
var arr = [1, 4, 5, 1, 3, 3];
var result = arr.map(function (item) {
    item = Math.pow(item, 2);
    return item;
}
);
console.log(result);
}

{
var arr = [1, 4, 5, 1, 3, 3];
var result = [];
for (i=0; i < arr.length; i++) {
    result[i] = Math.pow(arr[i], 2);
}
console.log(result);
}