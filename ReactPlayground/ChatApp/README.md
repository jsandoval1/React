<!-- *Personal Notes: -->
<!-- (1/14/24) Left on the video: 20:24, getting  alittle lost on the way he is setting up routes for register user-->

<!-- (1/18/24) Got a few minutes to work on the project today, got server side login and register working for "User Model" -->

<!-- (1/19/24) Completed the userAuth and userAction routes for the user model. I am going to start working on the conversations and messages models next. -->

<!-- (1/20/24) Completed the server side for now with messages and conversations. I am going to start working on the front end now. -->

<!-- (1/20/24) Installed react icons to start buiulding out navbar that will display using sockets for notifications. -->

<!-- (1/22/24) I have built out alot of the front end including the Home Page, Login Page, Register Page, and the profile page. I will connect this front end to the backend soon. -->

# ChatApp Practice Project

## Front End Notes:

- (1/22/24) In React, when passing boolean props, you can use a shorthand. Instead of explicitly setting the prop to `true`, you can simply write the prop name. Here's an example:

```jsx
<Rightbar Profile />
This is equivalent to:
<Rightbar Profile={true} />
In both cases, the Rightbar component will 
receive a prop called Profile with a value of true.
```

### Dependencies:

- react-router-dom (for routing)
- react-helmet (for meta tags)
- axios (for http requests)
- react-icons (for icons)

### Front End Challenges:

- None yet.

### Front End Things Learned:

- (1/14/24) Can store the base URL for axios calls an axios instance. This is useful for when you have multiple axios calls to the same server

## Server Notes

### Dependencies:

- nodemon (for easy server restarts)
- express (framework for node.js)
- mongoose (for mongodb)
- dotenv (for environment variables)
- cors (for cross origin resource sharing)
- morgan (for logging)
- helmet (for security)
- bcryptjs (for password hashing)

### Server Milestones:

- (1/14/24) Added helmet and morgan for security and logging, never used them before
- (1/14/24) Really focused on keeping server.js clean and reordered the code to make it more readable
- (1/19/24) Finished the userAuth and userAction routes for the user model. I am going to start working on the post model next.

### Server Challenges:

1. (1/19/2024) Did not know how to connect multiple model routes to the server. Had only experimented with one model route before.
2. (1/19/2024) I had never worked with an array of objects in a mongodb document before. This was crucial for the user model because I wanted to store the users friends in an array of objects. I

### Server Things Learned:

1. (1/19/2024) Learned how to connect multiple model routes to the server. I did this by creating a folder called routes and then creating a file for each model. Then I imported each model route into the server.js file and used app.use() to connect them to the server.
2. (1/19/2024) I learned how to store an array of objects in a mongodb document. I did this by creating a new schema for the array of objects and then adding that schema to the user schema. I also learned how to add a new object to the array of objects. I did this by using the $push operator in the update method. I also learned how to remove an object from the array of objects. I did this by using the $pull operator in the update method.

```

```
