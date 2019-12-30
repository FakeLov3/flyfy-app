import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../config/context';
import ChatWindow from './ChatWindow';
import './Chat.scss';

export default props => {
    const [connected, setConnected] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [client, setClient] = useState(null);
    const { openRooms } = useContext(ChatContext);

    useEffect(() => {
        const token = localStorage.token || sessionStorage.token;
        const wss = new WebSocket(
            `${process.env.REACT_APP_CHAT}?token=${token}`
        );
        wss.onclose = () => setConnected(false);
        wss.onerror = error => {
            console.log(`WebSocket error: ${error}`);
        };
        wss.onmessage = event => handleReceiveMessage(event);
        setClient(wss);
    }, []);

    const handleSendMessage = () => {
        const data = {
            type: 'message',
            to: 9,
            content: {
                message,
            },
        };
        setMessage('');
        connected && client.send(JSON.stringify(data));
    };

    const handleReceiveMessage = event => {
        const data = JSON.parse(event.data);
        switch (data.type) {
            case 'message':
                setMessages(messages => [...messages, data]);
                break;
            case 'connection':
                setConnected(true);
                break;
            default:
                break;
        }
        console.log(data);
    };

    return (
        <>
            {openRooms.map((room, i) => (
                <ChatWindow
                    key={i}
                    room={room}
                    client={client}
                    send={handleSendMessage}
                    receive={handleReceiveMessage}
                    message={{ message, setMessage }}
                    messages={messages}
                />
            ))}
        </>
    );
};
