import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Card, Button } from '../';
import Icon from '@mdi/react';
import { mdiAt, mdiLock } from '@mdi/js';
import './CreatePost.scss';

export default props => {
    return (
        <Card className="create-post">
            <div className="head">
                <p>Create new post</p>
            </div>
            <div className="post-content">
                <div className="text">
                    <TextareaAutosize
                        spellCheck="false"
                        draggable="false"
                        placeholder="Share it to the world!"
                    ></TextareaAutosize>
                </div>
                <div className="action">
                    <Button>
                        <Icon path={mdiAt} size={0.7} color="#ffffff" />
                    </Button>
                    <Button>
                        <Icon path={mdiLock} size={0.7} color="#ffffff" />
                    </Button>
                    <Button className="post-btn" label="Post" />
                </div>
            </div>
        </Card>
    );
};
