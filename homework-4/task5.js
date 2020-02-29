{
var arr = ['f', 'fa', 'faf', 'cvser', 'fdsf'];
var result = arr.filter(function (item) {
    return item.length < 4;
}
);
console.log(result);
}

{
var arr = ['f', 'fa', 'faf', 'cvser', 'fdsf'];
var result = [];
for (i=0; i < arr.length; i++) {
    if (arr[i].length < 4) {
        result[i] = arr[i]
    }
}
console.log(result);
}