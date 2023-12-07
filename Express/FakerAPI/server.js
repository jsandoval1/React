// Setting up a basic express server
const express = require('express'); // import express, but first run "npm install express"
const app = express(); // create an instance of express
const port = 8000;

// * start Faker Assignment
const {faker} = require( '@faker-js/faker' );

// Create a function called createUser that returns an object with the following properties:
const createUser = () => {
    const newUser = {
        UserId: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

// Create a function called createCompany that returns an object with the following properties:
const createCompany = () => {
    const newCompany = {
        CompanyId: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
}

// Store function calls in variables and console.log them
const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// * End of Faker Assignment

// Routes for testing the Faker Assignment to make sure they are being sent to the browser from the server
app.get("/api", (req, res) => { // Visit http://localhost:8000/api to test
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => { // Visit http://localhost:8000/api/users/new to test if new user is created
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => { // Visit http://localhost:8000/api/companies/new to test if new company is created
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => { // Visit http://localhost:8000/api/user/company to test if new user and company are created
    res.json({newFakeUser, newFakeCompany});
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: (${port}) , test links above.`) );