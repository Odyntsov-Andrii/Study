let age = 18;
let type = typeof (age);
if (type === 'string') {
    let conv = Number(age);
        if (conv >= 18) {
            console.log ("Доступ разрешен");
        }
        if (conv < 18) {
            console.log ("Доступ запрещен");
        }
    else console.log ("Некорректные данные");
    }
else if (type === 'number') {
    if (age >= 18) {
        console.log ("Доступ разрешен")
    }
    else {
        console.log ("Доступ запрещен")
    }
} else console.log ("Данный формат данных не поддерживается")