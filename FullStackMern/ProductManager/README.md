# Product Manager :rocket:

## Description
This is a practice project that I built to learn more about full-stack development. It is a simple product manager application that allows the user to perform CRUD operations on products. The user can create, read, update, and delete products. The application is built with React and Node.js, and the data is stored in a MongoDB database. I involved some more complex features in this project, such as backend validations and error handling in React, manipulating the Document File to dynamically update the title of the page and working in reusable components in my Single Page Application.

## Why did I build this?
I built this project to practice building a full-stack application with React and Node.js, as well as to gain experience using MongoDB as a database. My goal was to create a simple application that would allow me to perform CRUD operations on products. Additionally, I wanted to enhance my skills in using React Router to create a seamless single-page application. To manage state in the application, I utilized React Hooks. I also aimed to improve my understanding of backend validations and practice using props to pass data between components and create reusable components.

### Software and Libraries Used
| Technology | Description |
|------------|-------------|
| MongoDB | Used for the database, ideal for this project because of how it stores data in JSON-like documents |
| React | Used for building the user interface, includes React Router for routing, React Hooks for state management, and React Helmet for managing changes to the document head |
| Node.js | Used for the backend, includes Express for server setup, Mongoose for modeling the data, Dotenv for environment variable management, CORS for handling Cross-Origin Resource Sharing, and Nodemon for automatic server restarts |

## Installation

To install the project, follow these steps:

Clone the repository:

```sh
git clone https://github.com/jsandoval1/React.git
```

Navigate to the server directory and install the server dependencies
```sh
cd React/FullStack/ProductManager/server
```
```sh
npm install nodemon express mongoose dotenv cors
```

Navigate to the client directory and install the client dependencies
```sh 
cd React/FullStack/ProductManager/client
```
```sh
npm install react-router-dom react-helmet axios
```

#### Great, now that you have the project installed, let's run it!
To run the project, follow these steps:
1. In the `server` directory, run `nodemon server.js` to start the Node.js server.
2. In the `client` directory, run `npm run dev` to start the React development server. 

## Challenges

This project presented several significant challenges:

- **Backend Validations and Error Handling in React:** Handling errors properly in the create and update operations was a complex task. These operations used a reusable form component, and the errors were being passed in as props. Additionally, passing validation errors from the backend to the frontend and ensuring that these errors were used effectively to inform the user about issues with their input was particularly challenging.

- **State Management in React:** Understanding the difference between a successful deletion signal sent to the backend and updating the state in the parent view of a component was another challenge. The state of the parent component needed to be manually updated to ensure the user interface accurately reflected this change.

## Learnings

This project was a significant learning experience in several ways:

- **Backend Validations and Error Handling in React:** The challenge of handling errors in the create and update operations, along with the process of passing validation errors from the backend to the frontend, deepened my understanding of full-stack development and the interaction between client and server, along with my understanding of passing props between components.

- **State Management in React:** The challenge of managing state after a deletion operation highlighted the importance of manually updating the state of the parent component to ensure the user interface accurately reflects changes.

These learnings have not only enhanced my technical skills but also improved my problem-solving abilities and understanding of full-stack application development.