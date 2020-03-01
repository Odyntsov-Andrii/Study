var arr = [1, 4, 5, 1, 3, 3];
var testValue = 2;
function some (arr, testValue) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] != testValue) {result = false}
        else {result = true; break;}
    }
    return result;
}
var result = some (arr, testValue);
console.log(result)