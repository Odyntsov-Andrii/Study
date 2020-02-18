let user = {
    name: 'Dima',
    age: 25,
    eyescolor: 'green',
    isAdmin: false,
    role:2
    }
let newUser = {};
    function copyWithModify(user, newName = 'Andrii', newAge = '40', newEyescolor = 'blue') {
    for (var key in user) {
        newUser[key] = user[key];
    }
    newUser.name = newName;
    newUser.age = newAge;
    newUser.eyescolor = newEyescolor;
    return newUser;
}
newUser = copyWithModify(user);
console.log(newUser);