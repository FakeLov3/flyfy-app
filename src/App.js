import React, { useState } from 'react';
import Routes from './routes';
import { Loader, Modal, Cropper } from './components';
import { LoaderContext, ModalContext, CropperContext } from './config/context';

export default () => {
    const [loader, setLoader] = useState('');
    const [modal, setModal] = useState({ active: false });
    const [cropper, setCropper] = useState({});

    return (
        <LoaderContext.Provider value={{ setLoader }}>
            <ModalContext.Provider value={{ setModal }}>
                <CropperContext.Provider value={{ setCropper }}>
                    <Cropper data={cropper} />
                    <Modal active={modal.active} />
                    <Loader className={loader} />
                    <Routes />
                </CropperContext.Provider>
            </ModalContext.Provider>
        </LoaderContext.Provider>
    );
};
