const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    while (expr.length > 0) {
        let mass = expr.match(/.{10}/);
        expr = expr.replace(/.{10}/, '');
        let letter = mass[0].replace(/^0+/, '');
        if (letter.includes('*')) {
            result += ' ';
        } else {
            let code = '';
            for (let i = 0; i < letter.length; i += 2) {
                if (letter.slice(i, i + 2) == '10') {
                    code += '.';
                } else {
                    code += '-';
                }
            }
            result += MORSE_TABLE[code];
        }
    }
    return result;
}

module.exports = {
    decode
}