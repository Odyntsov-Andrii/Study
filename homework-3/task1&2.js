let user = {
    name: 'Dima',
    age: 25,
    eyescolor: 'green',
    isAdmin: false,
    role:2
    }
let newUser = {};
function copy(user) {
    for (var key in user) {
        newUser[key] = user[key];
    }
    return newUser;
}
newUser = copy(user);
newUser.age = 30;           // проверка на то, что эти два объекта разные
console.log(user);          // проверка на то, что эти два объекта разные
console.log(newUser);       // проверка на то, что эти два объекта разные

function isEqual(user,newUser) {
    for (var key in user) {
        if (user[key] === newUser[key]) {
            var equal = 'true'
        } else {
            equal = 'false'
            break;
        }
}
return equal;
}
equal = isEqual(user,newUser);
console.log (equal)