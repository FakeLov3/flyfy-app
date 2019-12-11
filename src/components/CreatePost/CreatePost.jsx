import React from 'react';
import { Card, Button } from '../';
import './CreatePost.scss';

export default props => {
    return (
        <Card className="create-post">
            <div className="head">
                <p>Create new post</p>
            </div>
            <div className="post-content">
                <div className="text">
                    <textarea spellCheck="false" draggable="false"></textarea>
                </div>
                <div className="action">
                    <Button label="Post" />
                </div>
            </div>
        </Card>
    );
};
