import React, { useState, useEffect, useContext, Suspense } from 'react';
import api from '../../services/api';
import { LoaderContext } from '../../config/context';
import { Switch, Route } from 'react-router-dom';
import { Friends, Header, Sidebar } from '../../components';
import { Feed, Profile, Edit } from '../../views';
import './Dashboard.scss';

const Chat = !window.isMobile ? (
    React.lazy(() => import('../../components/Chat/Chat'))
) : (
    // add mobile chat later
    <></>
);

export default props => {
    const [data, setData] = useState({});
    const { setLoader } = useContext(LoaderContext);

    useEffect(() => {
        setLoader('active');
        api.get('/user')
            .then(({ data }) => setData(data))
            .catch(() => {
                localStorage.removeItem('token');
                window.location.replace('/signin');
            })
            .finally(() => setLoader(''));
        // eslint-disable-next-line
    }, []);

    return (
        <div className="layout dashboard">
            <Suspense fallback={<></>}>
                <Header data={data} />
                <div className="content">
                    {/* adicionar o contexto do sidebar aqui */}
                    <Sidebar data={data} />
                    <Switch>
                        <Route exact path="/" component={Feed} />
                        <Route exact path="/settings" component={Edit} />
                        <Route exact path="/user/:user" component={Profile} />
                    </Switch>
                    <Chat />
                    <Friends />
                </div>
            </Suspense>
        </div>
    );
};
