let str  = 'adfsdfdsaffasfaaaaasfsfasfdsf', str_lenght = str.length, count = 0, search_letter = 'a', letter_counter = 0;
while (count < str_lenght) {
    if (str[count] === search_letter) {
        letter_counter++
    }
    console.log (str[count]);
    count++;
}
console.log (letter_counter);