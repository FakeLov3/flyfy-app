import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import './Chat.scss';

export default props => {
    const { room, connected, client, messages, position } = props;
    const [message, setMessage] = useState('');

    useEffect(() => {
        client.send(JSON.stringify(room));
    }, []);

    const handleSendMessage = () => {
        const data = {
            type: 'message',
            to: room.room,
            content: {
                message,
            },
        };
        setMessage('');
        connected && client.send(JSON.stringify(data));
    };

    return (
        <div style={{ right: position }} className="chat-popup">
            <div className="head">
                <p>{room.name || room.room}</p>
            </div>
            <div className="chat">
                {messages ? (
                    messages.map((msg, i) => {
                        const next = messages[i + 1] || true;
                        const isLast = next && msg.from !== next.from;
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
                    })
                ) : (
                    <></>
                )}
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
