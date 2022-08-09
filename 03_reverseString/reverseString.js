const reverseString = function(string) {
    let length = string.length;
    let newString = "";
    while (length >= 0){
        newString += string.charAt(length);
        length--;
    }
    return(newString);
};

// Do not edit below this line
module.exports = reverseString;
