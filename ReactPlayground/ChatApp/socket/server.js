const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:5173",
    },
});

let users = [];

const addUser = (userId, socketId) => {
    const user = users.find((user) => user.userId === userId);
    if (user) {
        // Update socket ID if user already exists
        user.socketId = socketId;
        // This line is very important because if a user leaves the chat and reconnects, the socket ID will be updated.
        // Otherwise, the user will not receive messages.
    } else {
        users.push({ userId, socketId });
    }
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {

    // Take userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    // Send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        const message = { senderId, text };
        if (user) {
            io.to(user.socketId).emit("getMessage", message);
        } else {
            console.log(`User not found: ${receiverId}`);
        }
    });

    // When disconnect
    socket.on("disconnect", () => {
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});

console.log("Server is running on port 8900");