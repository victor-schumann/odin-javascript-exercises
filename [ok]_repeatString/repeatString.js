/* javascript
repeatString('hey', 3) // returns 'heyheyhey' */

const repeatString = function(str, num) {
    let repeatedStr = "";
    while (num > 0) {
        repeatedStr += str;
        num --;
    }
    return repeatedStr;

};

// Do not edit below this line
module.exports = repeatString;
