exports.min = function min (array = []) {
    if(array.length === 0) return 0;
    let minValue = array[0];
    for(let i of array) {
        if(i < minValue) {
            minValue = i;
        }
    }
    return minValue;
}

exports.max = function max (array = []) {
    if(array.length === 0) return 0;
    let maxValue = array[0];
    for(let i of array) {
        if(i > maxValue) {
                maxValue = i;
        }
    }
    return maxValue;
}
  
exports.avg = function avg (array = []) {
    if(array.length === 0) return 0;
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    return sum / array.length;
}