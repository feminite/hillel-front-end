let n = prompt("Введіть ціле число N:");
let result = '';

for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {
        result += (i * i) + ' ';
    }
}

console.log(result);