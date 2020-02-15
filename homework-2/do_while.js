let str  = 'adfsdfdsaffasfaaaaasfsfasfdsf', str_lenght = str.length, count = 0, search_letter = 'a', letter_counter = 0;
do {
    if (str[count] === search_letter) {
        letter_counter++
    }
    count++;
}
while (count <= str_lenght-1)
console.log (letter_counter);