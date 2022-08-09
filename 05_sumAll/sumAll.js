const sumAll = function(first, second) {
    if (first >= 0 && second >= 0 && Number.isInteger(second)){
    let min = first;
    let max = second;
    if (first > second){
        min = second;
        max = first;
    }
    let result = 0;

    while(min <= max){
        result += min;
        min++;
    }
    return(result)
}else {return("ERROR")}

};

// Do not edit below this line
module.exports = sumAll;
