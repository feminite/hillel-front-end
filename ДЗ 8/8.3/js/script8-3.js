function inputNumber() {
    let lastInput = '';

    for (let i = 0; i < 10; i++) { 
        const input = prompt(`Enter a number greater than 100:`);

        const num = Number(input);
        lastInput = input;
      
        if (num > 100) {
            break;
        }

        if (i === 9) {
            console.log("10 attempts exhausted.");
        }
    }

    console.log("Last input:", lastInput);
}

inputNumber();