var firstArr = [2, 3];
var secArr = [3, 2];
var thirdArr = [5, 5];
var result = 0;

var sum = function (firstArr, secArr, thirdArr) {
    for (i = 0; i < firstArr.length; i++)
    result += firstArr[i] + secArr[i] + thirdArr[i];
    return result;
}
result = sum (firstArr, secArr, thirdArr);
console.log(result);