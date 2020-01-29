import React, { useContext } from 'react';
import { ChatContext } from '../../config/context';
import noProfilePic from '../../assets/images/no-profile-pic.png';

export default ({ data }) => {
    const { setOpenRooms } = useContext(ChatContext);

    const handleFriendClick = friend => {
        console.log(friend);
    };

    const handleRoomClick = room => {
        setOpenRooms(rooms => [
            ...rooms,
            {
                type: 'connection',
                room: room.chatId,
                name: room.chatName,
            },
        ]);
    };

    return (
        <div className="friends-list">
            {data.followers.length ? (
                <>
                    <p className="label">Followers</p>
                    <div className="divider" />
                    {data.followers.map((friend, i) => (
                        <div
                            key={i}
                            onClick={() => handleFriendClick(friend)}
                            className="profile-item item"
                        >
                            <img
                                src={
                                    friend.profilePic
                                        ? `${process.env.REACT_APP_API}/img?w=32&h=32&key=${friend.profilePic}`
                                        : noProfilePic
                                }
                                alt="profile"
                                className="profile-icon item-icon"
                            ></img>
                            <p className="profile-name item-name">
                                {friend.user}
                            </p>
                            <div className="user-status" />
                        </div>
                    ))}
                    <div className="divider" />
                </>
            ) : (
                <></>
            )}
            {data.rooms.length ? (
                <>
                    <p className="label">Recent messages</p>
                    <div className="divider" />
                    {data.rooms.map((room, i) => (
                        <div
                            key={i}
                            onClick={() => handleRoomClick(room)}
                            className="profile-item item"
                        >
                            <img
                                src={noProfilePic}
                                alt="profile"
                                className="profile-icon item-icon"
                            ></img>
                            <p className="profile-name item-name">
                                {room.chatName || room.chatId}
                            </p>
                        </div>
                    ))}
                </>
            ) : (
                <></>
            )}
        </div>
    );
};
