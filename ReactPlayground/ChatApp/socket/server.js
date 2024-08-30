// Created a socket server that listens on port 3000 and accepts connections from http://localhost:5137.
const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:5173",
    }
});

io.on('connection', socket => {
    console.log('New user connected');
});

