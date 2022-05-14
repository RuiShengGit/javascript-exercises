const fibonacci = function(number) {
    let n1 = 0; 
    let n2 = 1;
    var nextTerm;
    if (number < 0)
    {
        return "OOPS";
    }
    for (let i = 1; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
