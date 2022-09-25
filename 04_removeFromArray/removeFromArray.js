const removeFromArray = function(arr, value) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'value') {
        newArr.push(arr[i]);
    }
}
    
    /* let i = value.lenght;
    return arr.filter(function(ele) {
        return ele != value;
    }) */

    //try use the lenght of the amount of values to keep the code running
    //maybe try splice + forEach or filter().
};

// Do not edit below this line
module.exports = removeFromArray;
