var random = Math.round(Math.random() * 22);
var message_1 = 'Сутки только начались';
var message_2 = 'Еще рано, можно спать';
var message_3 = 'Мам, можно еще чуть-чуть поспать';
var message_4 = 'Собираемся в школу';
var message_5 = 'Уроки в школе';
var message_6 = 'Продленка';
var message_7 = 'Дорога домой';
var message_8 = 'Урррааа :)';
console.log (random);
switch (random) {
    case 0:
    case 1:
        console.log (message_1);
        break;
    case 2:
    case 3:
    case 4:
        console.log (message_2);
        break;
    case 5:
    case 6:
        console.log (message_3);
        break;
    case 7:
    case 8:
    case 9:
        console.log (message_4);
        break;
    case 10:
    case 11:
    case 12:
    case 13:
        console.log (message_5);
        break;
    case 14:
    case 15:
    case 16:
        console.log (message_6);
        break;
    case 17:
    case 18:
    case 19:
        console.log (message_7);
        break;
    case 20:
    case 21:
    case 22:
    case 23:
        console.log (message_8);
        break;
}