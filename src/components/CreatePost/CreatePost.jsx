import React, { useState, useContext } from 'react';
import { FeedContext, LoaderContext } from '../../config/context';
import TextareaAutosize from 'react-textarea-autosize';
import api from '../../services/api';
import { Card, Button } from '../';
import Icon from '@mdi/react';
import { mdiFileImage } from '@mdi/js';
import './CreatePost.scss';

export default props => {
    const [text, setText] = useState('');
    const [feed, setFeed] = useContext(FeedContext);
    const { setLoader } = useContext(LoaderContext);

    const handleNewPost = () => {
        setLoader('active');
        const token = localStorage.token;
        api.post('/createPost', { text })
            .then(() =>
                api
                    .get('feed')
                    .then(({ data }) => {
                        setFeed(feed => ({ ...feed, posts: data }));
                        setLoader('');
                    })
                    .catch(error => console.error(error))
            )
            .catch(error => {
                console.error(error);
                setLoader('');
            });
    };

    return (
        <Card className="create-post">
            <div className="head">
                <p>Create new post</p>
            </div>
            <div className="post-content">
                <div className="text">
                    <TextareaAutosize
                        onChange={event => setText(event.target.value)}
                        spellCheck="false"
                        draggable="false"
                        placeholder="Share it to the world!"
                    ></TextareaAutosize>
                </div>
                <div className="action">
                    <Button>
                        <Icon path={mdiFileImage} size={0.7} color="#ffffff" />
                        <p>Picture/video</p>
                    </Button>
                    <Button
                        onClick={handleNewPost}
                        className="post-btn"
                        label="Create post"
                    />
                </div>
            </div>
        </Card>
    );
};
