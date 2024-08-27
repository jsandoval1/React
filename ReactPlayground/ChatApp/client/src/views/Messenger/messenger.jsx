import React, { useContext, useEffect, useState } from 'react';
import './messenger.css'

import Navbar from '../../components/Navbar/Navbar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'

import { AuthContext } from '../../context/AuthContext'
import api from '../../config/axiosConfig'


function messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const { user } = useContext(AuthContext);

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


    return (
        <>
            <Navbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        <div>
                            {/* {conversations.map((c) => (
                                <div onClick={() => setCurrentChat(c)}>
                                    <Conversation key={c._id} conversation={c} currentUser={user} />
                                </div>
                            ))} */}
                        </div>
                        <div>
                            {conversations.map((c) => (
                                <div key={c._id} onClick={() => setCurrentChat(c)}>
                                    <Conversation conversation={c} currentUser={user} />
                                </div>
                            ))}
                        </div>
                        {/* {conversations.map((c) => (
                            <Conversation key={c._id} conversation={c} currentUser={user} />
                        ))} */}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    <Message />
                                    <Message own />
                                    <Message />
                                    <Message />
                                    <Message own />
                                    <Message />
                                    <Message />
                                    <Message own />
                                    <Message />
                                    <Message />
                                    <Message own />
                                    <Message />
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea
                                        className="chatMessageInput"
                                        placeholder="Write something...">
                                    </textarea>
                                    <button className="chatSubmitButton">Send</button>
                                </div>
                            </>
                        ) : (<span className="noConversationText">Open a conversation to start a chat.</span>)}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default messenger