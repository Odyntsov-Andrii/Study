{
var firstArr = [2, 3];
var secArr = [3, 2];
var resultArr = [];
function sum (firstArr, secArr) {
    for (i = 0; i < firstArr.length; i++)
    resultArr[i] = firstArr[i] + secArr[i];
    return resultArr;
}
resultArr = sum (firstArr, secArr);
console.log (resultArr);
}
{
var firstArr = [2, 3];
var secArr = [3, 2];
var resultArr = [];
firstArr.forEach (function (item, index) {
    resultArr[item, index] = firstArr[item, index] + secArr[item, index];
}
);
console.log (resultArr);
}