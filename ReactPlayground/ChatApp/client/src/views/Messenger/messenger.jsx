import React, { useContext, useEffect, useRef, useState } from 'react';
import './messenger.css'

import Navbar from '../../components/Navbar/Navbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'

import { AuthContext } from '../../context/AuthContext'
import api from '../../config/axiosConfig'
import { io } from 'socket.io-client'


function messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);


    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);


    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                user.following.filter((f) => users.some((u) => u.userId === f))
            );
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await api.get("/conversations/" + user._id)
                setConversations(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getConversations()
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await api.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        if (currentChat) {
            getMessages();
        }
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a message objects
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        // Send message to the server
        const receiverId = currentChat.members.find((member) => member !== user._id);
        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        // Save message to the database
        try {
            const res = await api.post("/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            <Navbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        <div>
                        </div>
                        <div>
                            {conversations.map((c) => (
                                <div key={c._id} onClick={() => setCurrentChat(c)}>
                                    <Conversation conversation={c} currentUser={user} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message key={m._id} message={m} own={m.sender === user._id} />
                                        </div>
                                    ))}
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea
                                        className="chatMessageInput"
                                        placeholder="write something..."
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}>
                                    </textarea>
                                    <button className="chatSubmitButton" onClick={handleSubmit}> Send </button>
                                </div>
                            </>
                        ) : (<span className="noConversationText">Open a conversation to start a chat.</span>)}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline
                            onlineUsers={onlineUsers}
                            currentId={user._id}
                            setCurrentChat={setCurrentChat}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default messenger