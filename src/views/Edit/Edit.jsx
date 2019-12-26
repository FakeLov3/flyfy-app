import React, { useState, useEffect, useContext, useRef } from 'react';
import api from '../../services/api';
import { LoaderContext, CropperContext } from '../../config/context';
import { Card, Button, Input } from '../../components';
import TextareaAutosize from 'react-textarea-autosize';
import Icon from '@mdi/react';
import { mdiContentSave, mdiCancel, mdiPencil } from '@mdi/js';
import noProfilePic from '../../assets/images/no-profile-pic.png';
import './Edit.scss';

export default props => {
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState({});
    const [croppedURL, setCroppedURL] = useState(null);
    const [blob, setBlob] = useState(null);
    const [loading, setLoading] = useState(true);

    const fileRef = useRef(null);
    const previewRef = useRef(null);

    const { setCropper } = useContext(CropperContext);
    const { setLoader } = useContext(LoaderContext);

    useEffect(() => {
        setLoader('active');
        setLoading(true);
        setCropper(cropper => ({
            ...cropper,
            crop: {
                aspect: 1,
                unit: '%',
                width: 50,
                height: 50,
                x: 25,
                y: 25,
            },
            events: {
                onImageLoaded: onImageLoaded,
                onComplete: onCropComplete,
                onChange: onCropChange,
            },
            onFinish: handleSaveProfilePic,
        }));
        getEditData();
        // eslint-disable-next-line
    }, []);

    const getEditData = () => {
        api.get('/user')
            .then(({ data }) => {
                setData(data);
                setLoader('');
                setLoading(false);
            })
            .catch(() => {
                setLoading(true);
                setLoader('');
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
        const formData = new FormData();

        Object.keys(inputs).forEach(key => formData.append(key, inputs[key]));
        blob && formData.append('blob', blob);

        api.post('/updateProfileInfo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(() => window.location.reload())
            .catch(() => setLoader(''));
    };

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]:
                event.target.name === 'user'
                    ? event.target.value.toLowerCase()
                    : event.target.value,
        }));
    };

    const handleChangeProfilePicture = () => fileRef.current.click();

    const handleOnChangeFile = ({ target }) => {
        const { files } = target;
        const reader = new FileReader();
        reader.onload = event =>
            setCropper(cropper => ({ ...cropper, src: event.target.result }));
        reader.readAsDataURL(files[0]);
    };

    const onImageLoaded = image => {
        setCropper(cropper => ({
            ...cropper,
            active: true,
        }));
        previewRef.current = image;
    };

    const onCropComplete = crop => makeClientCrop(crop);

    const onCropChange = crop => setCropper(cropper => ({ ...cropper, crop }));

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
        const canvas = document.createElement('canvas'),
            scaleX = image.naturalWidth / image.width,
            scaleY = image.naturalHeight / image.height;
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
                if (!blob) return reject(new Error('Empty canvas'));
                blob.name = fileName;
                let fileUrl;
                window.URL.revokeObjectURL(fileUrl);
                fileUrl = window.URL.createObjectURL(blob);
                setBlob(blob);
                resolve(fileUrl);
            }, 'image/jpeg');
        });
    };

    const handleSaveProfilePic = () =>
        setCropper(cropper => ({
            ...cropper,
            active: false,
        }));

    return (
        <div className="edit view">
            <div className="main">
                <Card className="edit">
                    <h1>Edit your profile</h1>
                    <div style={{ display: 'flex' }}>
                        <div className="edit-profile-pic">
                            <p className="label">Profile picture</p>
                            <div className="img-wrapper">
                                <img
                                    style={{ opacity: loading ? 0 : 1 }}
                                    alt="preview-profile"
                                    ref={previewRef}
                                    className="card profile-pic"
                                    src={
                                        croppedURL ||
                                        data.profilePic ||
                                        noProfilePic
                                    }
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
                                                value={data[input.name]}
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
