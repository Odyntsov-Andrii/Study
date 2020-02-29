var arr = [1, 4, 5, 1, 3, 3];
function act (i) {
    return arr[i] +=20;
}
function forEach (arr, act) {
    for (i=0; i < arr.length; i++) {
        var newItem = act (i);
        arr[i] = newItem;
        console.log(arr[i]) //выдает норм результат
    }
}
var result = forEach (arr, act);
console.log(result) // выдает undefined 
