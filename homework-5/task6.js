var arr = [1, 4, 5, 1, 3, 3];
var testValue = 0;
function some (arr, testValue) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] > testValue) {result = true;}
        else {result = false; break;}
    }
    return result;
}
var result = some (arr, testValue);
console.log(result)