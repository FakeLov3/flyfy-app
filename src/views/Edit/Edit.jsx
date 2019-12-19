import React, { useState, useEffect, useContext, useRef } from 'react';
import api from '../../services/api';
import { LoaderContext } from '../../config/context';
import { Card, Button, Input } from '../../components';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@mdi/react';
import { mdiContentSave, mdiCancel, mdiPencil } from '@mdi/js';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './Edit.scss';

export default props => {
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState({});
    const fileRef = useRef(null);
    const previewRef = useRef(null);
    const [cropperActive, setCropperActive] = useState(false);
    const [cropperSource, setCropperSource] = useState(null);
    const [crop, setCrop] = useState({
        aspect: 1,
        unit: '%',
        width: 50,
        height: 50,
        x: 25,
        y: 25,
    });
    const [croppedURL, setCroppedURL] = useState(null);
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
        const reader = new FileReader();
        reader.onload = event => {
            setCropperSource(event.target.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const onImageLoaded = image => {
        setCropperActive(true);
        previewRef.current = image;
    };

    const onCropComplete = crop => {
        console.log('opa');
        makeClientCrop(crop);
    };

    const onCropChange = crop => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        setCrop(crop);
    };

    const makeClientCrop = async crop => {
        if (previewRef && crop.width && crop.height) {
            const croppedImageUrl = await getCroppedImg(
                previewRef.current,
                crop,
                `${Date.now()}.jpeg`
            );
            setCroppedURL(croppedImageUrl);
        }
    };

    const getCroppedImg = (image, crop, fileName) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                let fileUrl;
                window.URL.revokeObjectURL(fileUrl);
                fileUrl = window.URL.createObjectURL(blob);
                resolve(fileUrl);
            }, 'image/jpeg');
        });
    };

    return (
        <>
            <div className={`react-crop ${cropperActive ? 'active' : ''}`}>
                <ReactCrop
                    className="cropper"
                    src={cropperSource}
                    crop={crop}
                    onImageLoaded={onImageLoaded}
                    onComplete={onCropComplete}
                    onChange={onCropChange}
                />
                <Button label="Save" />
            </div>
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
                                    src={croppedURL}
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
                                <Icon
                                    path={mdiCancel}
                                    size={0.7}
                                    color="#ffffff"
                                />
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
        </>
    );
};
