let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1000}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    let sum = 0;

    for (let key in department) {
        let value = department[key];

        if (value.salary !== undefined) {
            sum += value.salary;
        } else {
            sum += sumSalaries(value);
        }
    }

    return sum;
}

console.log(sumSalaries(company));