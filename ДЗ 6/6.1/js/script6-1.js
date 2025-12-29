const person = {
    firstName: 'Klaus',
    lastName: "Santa",
    age: 1000,
    city: "Demre",
    email: "santa.klaus@mail.com",
    getInfo: function() {
        return `${person.lastName} ${this.firstName}, ${this.age} years, ${this.city} town, ${this.email}`;
    }
}

console.log(person.getInfo());