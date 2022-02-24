module.exports = function toReadable (number) {
    let result;
    const numUandTeen = {
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven', 
        8: 'eight', 
        9: 'nine', 
        10: 'ten', 
        11: 'eleven', 
        12: 'twelve', 
        13: 'thirteen', 
        14: 'fourteen', 
        15: 'fifteen', 
        16: 'sixteen', 
        17: 'seventeen', 
        18: 'eighteen', 
        19: 'nineteen'
    };
    const numTy = {
        2: 'twenty', 
        3: 'thirty', 
        4: 'forty', 
        5: 'fifty', 
        6: 'sixty', 
        7: 'seventy', 
        8: 'eighty', 
        9: 'ninety', 
    };
    if (number === 0) {
        result = 'zero';
    };
    if (number > 0 && number < 10) {
        result = numUandTeen[number];
    };
    if (number > 0 && number < 20) {
        result = numUandTeen[number];
    }
    if (number >= 20 && number < 100) {
        let numberToString1 = number.toString();
        if (+numberToString1[1] === 0) {
            result = numTy[+numberToString1[0]];
        }
        else {
            result = `${numTy[numberToString1[0]]} ${numUandTeen[+numberToString1[1]]}`;
        }
    }
    if (number >= 100) {
        let numberToString2 = number.toString();
        let first = +numberToString2[0];
        let second = +numberToString2[1];
        let third = +numberToString2[2];
        if (second === 0) {
            result = `${numUandTeen[first]} hundred`;
            result += ` ${numUandTeen[third] ? numUandTeen[third] : ''}`;
        }
        else {
            result = `${numUandTeen[first]} hundred`;
            result += ` ${toReadable(`${second}${third}`)}`;
        }
    }
    return result.trim();
}