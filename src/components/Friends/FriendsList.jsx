import React from 'react';
import noProfilePic from '../../assets/images/no-profile-pic.png';

export default ({ friends }) => {
    const handleFriendClick = friend => {
        console.log(friend);
    };

    return (
        <div className="friends-list">
            {friends.map((friend, i) => (
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
                    <p className="profile-name item-name">{friend.user}</p>
                    <div className="user-status" />
                </div>
            ))}
        </div>
    );
};
