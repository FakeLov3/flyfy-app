import React, { useState, useEffect, useContext, useRef } from 'react';
import api from '../../services/api';
import { LoaderContext } from '../../config/context';
import { Card, Button, Input } from '../../components';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@mdi/react';
import { mdiContentSave, mdiCancel, mdiPencil } from '@mdi/js';
import './Edit.scss';

export default props => {
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState({});
    const fileRef = useRef(null);
    const previewRef = useRef(null);
    const { setLoader } = useContext(LoaderContext);

    useEffect(() => {
        setLoader('active');
        getEditData();
    }, []);

    const getEditData = () => {
        api.get('getEditData')
            .then(({ data }) => {
                setLoader('');
                setData(data);
            })
            .catch(error => {
                setLoader('');
                console.error(error);
            });
    };

    const form = [
        {
            name: 'user',
            type: 'text',
            placeholder: 'Username',
        },
        {
            name: 'name',
            type: 'text',
            placeholder: 'Name',
        },
    ];

    const handleSubmit = event => {
        event.preventDefault();
        setLoader('active');
        api.put('/updatedInfo', { ...inputs })
            .then(response => {
                console.log(response);
                window.location.pathname = '/';
            })
            .catch(() => setLoader(''));
    };

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    const handleChangeProfilePicture = () => {
        fileRef.current.click();
    };

    const handleOnChangeFile = ({ target }) => {
        const { files } = target;
        console.log(previewRef.current);
        const reader = new FileReader();
        reader.onload = event => (previewRef.current.src = event.target.result);
        reader.readAsDataURL(files[0]);
    };

    return (
        <div className="edit view">
            <div className="main">
                <Card className="edit">
                    <h1>Edit your profile</h1>
                    <div style={{ display: 'flex' }}>
                        <div className="edit-profile-pic">
                            <p className="label">Profile picture</p>
                            <img
                                ref={previewRef}
                                className="card profile-pic"
                            />
                            <Button onClick={handleChangeProfilePicture}>
                                Edit
                                <Icon
                                    path={mdiPencil}
                                    size={0.7}
                                    color="#ffffff"
                                />
                            </Button>
                        </div>
                        <div className="edit-profile-info">
                            <form
                                autoComplete="new-password"
                                spellCheck={false}
                            >
                                <div className="edit-wrapper">
                                    {form.map((input, i) => (
                                        <div key={i}>
                                            <p className="label">
                                                {input.placeholder}
                                            </p>
                                            <Input
                                                align="left"
                                                className={`edit-input`}
                                                defaultValue={
                                                    data[input.name] || ''
                                                }
                                                onChange={handleInputChange}
                                                {...input}
                                                required
                                            />
                                        </div>
                                    ))}
                                    <p className="label">Bio</p>
                                    <div className="text">
                                        <TextareaAutosize
                                            name="bio"
                                            onChange={handleInputChange}
                                            defaultValue={data.bio || ''}
                                            spellCheck="false"
                                            draggable="false"
                                            placeholder="Tell us a little about you!"
                                        ></TextareaAutosize>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="edit-footer">
                        <Button onClick={handleSubmit}>
                            Save
                            <Icon
                                path={mdiContentSave}
                                size={0.7}
                                color="#ffffff"
                            />
                        </Button>
                        <Button>
                            Cancel
                            <Icon path={mdiCancel} size={0.7} color="#ffffff" />
                        </Button>
                    </div>
                </Card>
            </div>
            <input
                className="input-file"
                ref={fileRef}
                type="file"
                onChange={handleOnChangeFile}
            ></input>
        </div>
    );
};
