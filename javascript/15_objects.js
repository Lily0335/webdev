const mysym3 = Symbol("uniqueKey");

const person = {
    firstName: "John",
    lastName: "Doe",
    [mysym3]: "secretCode",
    age: 30,
    occupation: "Engineer",
    country: "USA",
    city: "New York",
    hobbies: ["coding", "cycling", "photography"],
    address: {
        street: "123 Main St",
        zipCode: "10001",
        state: "NY"
    },
    contact: [
        { type: "email", value: "john.doe@example.com" },
        { type: "phone", value: "555-1234" }
    ],
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    updateHobbies(newHobbies) {
        this.hobbies = [...this.hobbies, ...newHobbies];
    }
}

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person[mysym3]);
console.log(person.fullName());
console.log(person.contact[0].value);  // Accessing the email
console.log(person.address.zipCode);  // Accessing the zip code
person.updateHobbies(["hiking", "swimming"]);
console.log(person.hobbies);  // Updated hobbies list
console.log(person);
