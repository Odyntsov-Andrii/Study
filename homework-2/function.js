function search (str, search_letter) {
    let str_lenght = str.length, letter_counter = 0;
    for (let i = 0; i < str_lenght; i++) {
        if (str[i] === search_letter) {
            letter_counter++;
        }
    }
    return console.log (letter_counter);
}

let result = search('adfsdfdsaffasfaaaaasfsfasfdsf', 'a')
