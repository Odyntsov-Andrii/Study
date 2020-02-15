let str  = 'adfsdfdsaffasfaaaaasfsfasfdsf', str_lenght = str.length, search_letter = 'a', letter_counter = 0;
for (let i = 0; i < str_lenght; i++) {
    if (str[i] === search_letter) {
        letter_counter++;
    }
}
console.log (letter_counter);