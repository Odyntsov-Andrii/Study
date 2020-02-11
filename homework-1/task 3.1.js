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
if (random < 10 && random >= 7) {
    console.log (message_4);
} else if (random < 7 && random >= 5) {
    console.log (message_3);
} else if (random < 5 && random >= 2) {
    console.log (message_2);
} else if (random < 2) {
    console.log (message_2);
}
if (random >= 10 && random < 14) {
    console.log (message_5);
} else if (random >= 14 && random < 17) {
    console.log (message_6);
} else if (random >= 17 && random < 20) {
    console.log (message_7);
} else if (random > 20) {
    console.log (message_8);
}