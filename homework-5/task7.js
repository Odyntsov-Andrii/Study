var arr = [1, 4, 5, 1, 3, 3];
var newArr = [];
var testValue = 3;
function act (testValue) {
    return testValue;
}
function filter (arr, act) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] > testValue) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
newArr = filter(arr, act);
console.log(newArr);