import React, { useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import { Button } from '../../components';
import Icon from '@mdi/react';
import { mdiContentSave, mdiCancel } from '@mdi/js';
import 'react-image-crop/dist/ReactCrop.css';
import './Cropper.scss';

export default ({ data }) => {
    const { active, src, crop, events, onFinish, onCancel } = data;

    return (
        <div className={`react-crop${active ? ' active' : ''}`}>
            <ReactCrop
                className="cropper"
                src={src}
                crop={crop}
                {...events}

                // onImageLoaded={onImageLoaded}
                // onComplete={onCropComplete}
                // onChange={onCropChange}
            />
            <div className="actions">
                <Button onClick={onFinish}>
                    Save
                    <Icon path={mdiContentSave} size={0.7} color="#ffffff" />
                </Button>
                <Button onClick={onCancel}>
                    Cancel
                    <Icon path={mdiCancel} size={0.7} color="#ffffff" />
                </Button>
            </div>
        </div>
    );
};
