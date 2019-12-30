import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import './Chat.scss';

export default props => {
    const [connected, setConnected] = useState(false);
    const [connection, setConnection] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        const data = {
            to: 9,
            content: {
                message,
            },
        };
        setMessage('');
        connected && connection.send(JSON.stringify(data));
    };

    const handleReceiveMessage = event => {
        const data = JSON.parse(event.data);
        console.log(data);
        setMessages(messages => [...messages, data]);
    };

    const handleConnection = () => {
        const token = localStorage.token || sessionStorage.token;
        const wss = new WebSocket(
            `${process.env.REACT_APP_CHAT}?token=${token}&room=9`
        );

        setConnection(wss);

        wss.onopen = () => setConnected(true);
        wss.onclose = () => setConnected(false);
        wss.onerror = error => {
            setConnected(false);
            console.log(`WebSocket error: ${error}`);
        };
        wss.onmessage = event => handleReceiveMessage(event);
    };

    return (
        <div
            onClick={() => !connected && handleConnection()}
            className="chat-popup"
        >
            <div className="head">
                <p>username</p>
            </div>
            <div className="chat">
                {messages.map((msg, i) => {
                    const next = messages[i + 1] || true;
                    const isLast = next && msg.from != next.from;
                    return (
                        <div
                            className={`text-message from-${
                                msg.isUser ? 'user' : 'friend'
                            }${isLast ? ' last' : ''}`}
                            key={i}
                        >
                            <p>{msg.content.message}</p>
                        </div>
                    );
                })}
            </div>
            <div className="footer">
                <div className="message">
                    <TextareaAutosize
                        maxRows={5}
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        spellCheck="false"
                        draggable="false"
                        placeholder="Type your message"
                    />
                </div>
                <div className="actions">
                    <Icon
                        className="send-icon"
                        onClick={handleSendMessage}
                        path={mdiSend}
                        size={0.7}
                        color="#303030"
                    />
                </div>
            </div>
        </div>
    );
};
