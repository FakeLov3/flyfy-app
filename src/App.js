import React, { useState } from 'react';
import Routes from './routes';
import { Loader, Modal, Cropper } from './components';
import {
    LoaderContext,
    ModalContext,
    CropperContext,
    ChatContext,
    SidebarContext,
} from './config/context';

window.isMobile = window.innerWidth < 768;

export default () => {
    const [loader, setLoader] = useState('');
    const [modal, setModal] = useState({ active: false });
    const [cropper, setCropper] = useState({});
    const [openRooms, setOpenRooms] = useState([]);
    const [mobileSidebar, setMobileSidebar] = useState(false);

    return (
        <LoaderContext.Provider value={{ setLoader }}>
            <ModalContext.Provider value={{ setModal }}>
                <SidebarContext.Provider
                    value={{ mobileSidebar, setMobileSidebar }}
                >
                    <CropperContext.Provider value={{ setCropper }}>
                        <ChatContext.Provider
                            value={{ openRooms, setOpenRooms }}
                        >
                            <Cropper data={cropper} />
                            <Modal active={modal.active} />
                            <Loader className={loader} />
                            <Routes />
                        </ChatContext.Provider>
                    </CropperContext.Provider>
                </SidebarContext.Provider>
            </ModalContext.Provider>
        </LoaderContext.Provider>
    );
};
