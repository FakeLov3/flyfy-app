import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../config/context';
import ChatWindow from './ChatWindow';
import './Chat.scss';

export default props => {
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState({});
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
            setConnected(false);
        };
        wss.onmessage = event => handleReceiveMessage(event);
        setClient(wss);
    }, []);

    const handleReceiveMessage = event => {
        const data = JSON.parse(event.data);
        (() =>
            ({
                message: () =>
                    setMessages(messages => ({
                        ...messages,
                        [data.to]: [...(messages[data.to] || []), data],
                    })),
                connection: () => setConnected(true),
            }[data.type]))().call();
    };

    return openRooms.map((room, i) => (
        <ChatWindow
            key={i}
            connected={connected}
            room={room}
            position={(i + 1) * 325 - 100}
            client={client}
            receive={handleReceiveMessage}
            messages={messages[room.room]}
        />
    ));
};
