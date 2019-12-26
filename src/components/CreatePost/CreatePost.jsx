import React, { useState, useContext, useRef, useEffect } from 'react';
import { FeedContext, LoaderContext } from '../../config/context';
import TextareaAutosize from 'react-textarea-autosize';
import api from '../../services/api';
import { Card, Button } from '../';
import Icon from '@mdi/react';
import { mdiFileImage } from '@mdi/js';
import './CreatePost.scss';

export default props => {
    const [text, setText] = useState('');
    const [files, setFiles] = useState([]);
    const [previewFiles, setPreviewFiles] = useState([]);

    const [feed, setFeed] = useContext(FeedContext);
    const { setLoader } = useContext(LoaderContext);

    const fileRef = useRef(null);

    const { posts } = feed;

    const handleNewPost = () => {
        setLoader('active');
        setText('');
        setFiles([]);
        setPreviewFiles([]);

        const formData = new FormData();
        formData.append('text', text);
        files.forEach((file, i) => formData.append(`files[${i}]`, file));

        api.post('/createPost', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(({ data }) => {
                setFeed(feed => ({
                    ...feed,
                    posts: [...data, ...posts],
                }));
            })
            .catch(error => console.error(error))
            .finally(() => setLoader(''));
    };

    const handleOnChangeFile = ({ target }) => {
        for (let i = 0; i < target.files.length; i++) {
            const hasFile = files.some(
                file => target.files[i].name === file.name
            );
            if (!hasFile) {
                setFiles(files => [...files, target.files[i]]);
                const reader = new FileReader();
                reader.onload = event => {
                    setPreviewFiles(previewFiles => [
                        ...previewFiles,
                        { file: event.target.result },
                    ]);
                };
                reader.readAsDataURL(target.files[i]);
            }
        }
    };

    return (
        <Card className="create-post">
            <div className="head">
                <p>Create new post</p>
            </div>
            <div
                className={`post-content${
                    !previewFiles.length > 0 ? ' has-no-files' : ''
                }`}
            >
                <div style={{ padding: '12px 12px 0' }}>
                    <div className="text">
                        <TextareaAutosize
                            value={text}
                            onChange={event => setText(event.target.value)}
                            spellCheck="false"
                            draggable="false"
                            placeholder="Share it to the world!"
                        ></TextareaAutosize>
                    </div>
                </div>
                <div className="preview-wrapper">
                    {previewFiles.map((preview, i) => (
                        <img className="preview" key={i} src={preview.file} />
                    ))}
                </div>
                <div className="action">
                    <Button onClick={() => fileRef.current.click()}>
                        <Icon path={mdiFileImage} size={0.7} color="#ffffff" />
                        <p>Picture</p>
                    </Button>
                    <Button
                        onClick={handleNewPost}
                        className="post-btn"
                        label="Create post"
                    />
                </div>
            </div>
            <input
                className="input-file"
                ref={fileRef}
                type="file"
                multiple
                onChange={handleOnChangeFile}
            ></input>
        </Card>
    );
};
