# ChatApp Practice Project

## Front End Notes:

### Dependencies:

- react-router-dom (for routing)
- react-helmet (for meta tags)
- axios (for http requests)
- react-icons (for icons)
- timeago.js (for time ago)
- react-spinners (for loading spinners)

### Front End Milestones:
- (1/14/24) Can store the base URL for axios calls an axios instance. This is useful for when you have multiple axios calls to the same server. Here's an example:

```jsx
// Create an axios instance
const axiosInstance = axios.create({
    baseURL: "http://localhost:8800/api/",
});

// Use the axios instance to make calls
axiosInstance.get("/users").then((res) => {
    console.log(res);
});
```

- (1/22/24) In React, when passing boolean props, you can use a shorthand. Instead of explicitly setting the prop to `true`, you can simply write the prop name. Here's an example:

```jsx
// In both cases, the Rightbar component will 
// receive a prop called Profile with a value of true.
<Rightbar Profile />
// This is equivalent to:
<Rightbar Profile={true} />
```

- (1/22/24) Built out the Home Page, Login Page, Register Page, and the profile page. I will connect this front end to the backend soon.
- (2/1/24) Added react-rotuer-dom for routing
- (2/5/24) Started working on connecting the front end to the back end. Currently getting the feed page to display the posts from the server.
- (2/6/24) Got login and register working. This was done by using the context API to store the user data. We also used useReducer to manage the state of the user data. 
- (2/6/24) There are a few things so far that I feel are cutting a few corners or just not good practice. One of these being the way **form validations are being handled**. Currently they are being managed by the front end, but I believe they should be managed by the back end. I already have some regex in place for the back end, but I am not using it yet.

### Front End Challenges:

- (2/5/24) I have been connecting the back end to the front end and I am having trouble getting the posts to display on the feed page. However, I am trying to use as many reusable components as possible, so managing props is getting a little tricky. Along with which calls to make in the useEffect hook.

### Front End Things Learned:

- (2/5/24) Can store the base URL for servers calls in something called "proxy" . Not sure if this is better than using an axios instance yet.
- (2/5/24) Learned of a new library called "timeago.js" that can be used to display the time ago from a date. This is useful for displaying the time a post was created. In the past I have tried making my own function to do this, but it was not as easy to implement as this library.
- Found a new library called "react-spinners" that can be used to display loading spinners. This is useful for when you are making a server call and want to display a spinner while the data is being fetched.

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
- multer (for file uploads)

### Server Milestones:

- (1/14/24) Added helmet and morgan for security and logging, never used them before
- (1/14/24) Really focused on keeping server.js clean and reordered the code to make it more readable
- (1/19/24) Finished the userAuth and userAction routes for the user model. I am going to start working on the post model next.
- (2/27/24) Added multer for file uploads. 

### Server Challenges:

1. (1/19/2024) Did not know how to connect multiple model routes to the server. Had only experimented with one model route before.
2. (1/19/2024) I had never worked with an array of objects in a mongodb document before. This was crucial for the user model because I wanted to store the users friends in an array of objects. I

### Server Things Learned:

1. (1/19/2024) Learned how to connect multiple model routes to the server. I did this by creating a folder called routes and then creating a file for each model. Then I imported each model route into the server.js file and used app.use() to connect them to the server.
2. (1/19/2024) I learned how to store an array of objects in a mongodb document. I did this by creating a new schema for the array of objects and then adding that schema to the user schema. I also learned how to add a new object to the array of objects. I did this by using the $push operator in the update method. I also learned how to remove an object from the array of objects. I did this by using the $pull operator in the update method.
