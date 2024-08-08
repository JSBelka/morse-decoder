const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for( let i = 0; i < expr.length; i += 2){
        if (String(expr[i]) + String(expr[i+1]) === '10') {
            result += '.';
           } else if (String(expr[i]) + String(expr[i+1]) === '11') {
            result += '-';  
           } else {
            result += ' ';
           }
    }
    let string = '';
    result.split(" ").forEach(item => {
        if(item === ""){
            string += " "
        } else {
            if(MORSE_TABLE[item]){
                string += MORSE_TABLE[item];
            }
        }
    });
    return (string.split("  ")).join(" ");
}

module.exports = {
    decode
}