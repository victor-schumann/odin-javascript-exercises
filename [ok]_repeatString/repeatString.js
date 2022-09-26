/* javascript
repeatString('hey', 3) // returns 'heyheyhey' */

const repeatString = function(str, num) {
    let repeatedStr = str;

    if (num === 1) {
    return str;

    } else if (num < 0){
        return "ERROR";

    } else if (num > 1) {
        while (num > 1) {
            repeatedStr += str;
            num --;

        }
        return repeatedStr;

    } else if (num === 0) {
        return '';

    }
};

// Do not edit below this line
module.exports = repeatString;
