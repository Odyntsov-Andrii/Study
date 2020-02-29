function forEach () {
    for (i=0; i < arr.length; i++) {
    arr[i] += 10;
    }
    return (arr);
}
console.log(forEach (arr = [1, 4, 5, 1, 3, 3]));