import React, { useState } from 'react';
import Routes from './routes';
import { Loader } from './components';
import { LoaderContext } from './config/context';

export default () => {
    const [loader, setLoader] = useState('');

    return (
        <LoaderContext.Provider value={{ setLoader }}>
            <Loader className={loader} />
            <Routes />
        </LoaderContext.Provider>
    );
};
