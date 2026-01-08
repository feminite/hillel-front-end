function productNumbers(a) {
    return function(b) {
        return a * b;
    };
}

const result = productNumbers(5)(2);

console.log(result); // 10