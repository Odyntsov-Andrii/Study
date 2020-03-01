var arr = [1, 4, 5, 1, 3, 3];
var newArr = [];
function act (i) {
    return newArr[i] = arr[i] + 20;
}
function map (arr, act) {
    for (i=0; i < arr.length; i++) {
        newArr[i] = act (i);
    }
    return newArr;
}
newArr = map(arr, act);
console.log(newArr);