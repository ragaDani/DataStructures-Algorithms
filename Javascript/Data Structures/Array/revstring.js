toBeReversed = "Poggers";

function reverse(str){
    if (!str || str.length <2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }
    var newStr = "";
    for (let i = str.length -1;i>=0;i--) {
        newStr += str[i];
    }
    return newStr;
};

console.log(reverse(toBeReversed));
