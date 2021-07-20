function reverseString(str){
    if(str){
        return str.split('').reverse().join('')
    }
    throw('No valid string');
}

module.exports = reverseString;