import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../../config/context';
import api from '../../services/api';
import { Checkbox, Button, Input } from '../../components';
import Icon from '@mdi/react';
import {
    mdiAccount,
    mdiAt,
    mdiLock,
    mdiEye,
    mdiEyeOff,
    mdiAlertCircle,
} from '@mdi/js';

export default props => {
    const [inputs, setInputs] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [terms, setTerms] = useState(false);
    const [credentials, setCredentials] = useState(false);
    const { setLoader } = useContext(LoaderContext);

    const form = [
        {
            name: 'user',
            type: 'text',
            placeholder: 'Username',
            icons: [
                <Icon style={{ order: 0 }} path={mdiAccount} />,
                <Icon
                    className="error"
                    style={{
                        order: 2,
                        margin: 0,
                    }}
                    path={mdiAlertCircle}
                    color="red"
                />,
            ],
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'E-mail',
            icons: [
                <Icon style={{ order: 0 }} path={mdiAt} />,
                <Icon
                    className="error"
                    style={{
                        order: 2,
                        margin: 0,
                    }}
                    path={mdiAlertCircle}
                    color="red"
                />,
            ],
        },
        {
            name: 'password',
            type: showPassword ? 'text' : 'password',
            placeholder: 'Password',
            icons: [
                <Icon style={{ order: 0 }} path={mdiLock} />,
                <Icon
                    onMouseUp={() => setShowPassword(false)}
                    onMouseDown={() => setShowPassword(true)}
                    onMouseLeave={() => setShowPassword(false)}
                    style={{
                        order: 2,
                        margin: 0,
                        cursor: 'pointer',
                    }}
                    path={showPassword ? mdiEyeOff : mdiEye}
                />,
            ],
        },
    ];

    const st = {};
    form.map(
        input =>
            (st[input.name] = {
                status: 'neutral',
            })
    );

    const [status, setStatus] = useState(st);

    useEffect(() => {
        const attributes = [terms];
        for (let i in status) {
            attributes.push(status[i].status === 'success');
        }
        setCredentials(attributes.every(one => one));
    }, [status, terms]);

    const handleSubmit = event => {
        event.preventDefault();
        setLoader('active');
        credentials &&
            api
                .post('/createUser', { ...inputs })
                .then(() => {
                    window.location.pathname = '/';
                })
                .catch(error => setLoader(''));
    };

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    const handleValidation = event => {
        event.persist();
        const name = event.target.name;
        if (event.target.value.length > 0) {
            api.get(`/validate/${name}=${event.target.value}`)
                .then(({ data }) =>
                    setStatus(status => ({
                        ...status,
                        [name]: {
                            status: !data.available ? 'error' : 'success',
                            message: data.message,
                        },
                    }))
                )
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="layout auth">
            <div className="container card">
                <div style={{ marginBottom: 12 }} className="header">
                    <h1 className="logo">Join our community</h1>
                </div>
                <form
                    autoComplete="new-password"
                    spellCheck={false}
                    onSubmit={handleSubmit}
                    onChange={handleInputChange}
                >
                    <div className="credentials">
                        {form.map((input, i) => {
                            const st = status[input.name].status;
                            return (
                                <div key={i}>
                                    <Input
                                        onBlur={handleValidation}
                                        onChange={() =>
                                            setStatus(status => ({
                                                ...status,
                                                [input.name]: {
                                                    status: 'neutral',
                                                },
                                            }))
                                        }
                                        align="left"
                                        className={`auth-input ${st}`}
                                        icon={input.icons.map(
                                            ({ props }, j) => {
                                                const {
                                                    style,
                                                    className,
                                                } = props;
                                                return (
                                                    <Icon
                                                        key={j}
                                                        {...props}
                                                        style={{
                                                            ...style,
                                                            opacity:
                                                                className ===
                                                                'error'
                                                                    ? st ===
                                                                      'error'
                                                                        ? 1
                                                                        : 0
                                                                    : 1,
                                                            transition:
                                                                'opacity 0.25s ease',
                                                        }}
                                                        size={0.7}
                                                        color={
                                                            st === 'error'
                                                                ? 'red'
                                                                : st ===
                                                                  'neutral'
                                                                ? '#303030'
                                                                : 'green'
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                        type={input.type}
                                        name={input.name}
                                        placeholder={input.placeholder}
                                        required
                                    />
                                    <p className={`message ${st}`}>
                                        {status[input.name].message}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="options">
                        <div
                            style={{ margin: 'auto' }}
                            className="checkbox-wrapper"
                        >
                            <Checkbox
                                onClick={() => setTerms(terms => !terms)}
                                active={terms}
                            />
                            <p style={{ margin: '0 6px', textAlign: 'center' }}>
                                I have read and agree to the{' '}
                                <span
                                    style={{
                                        color: 'blue',
                                        fontFamily: 'Circular',
                                        cursor: 'pointer',
                                    }}
                                >
                                    terms and conditions
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="submit">
                        <Button
                            className={`submit-button${
                                credentials ? ' active' : ''
                            }`}
                            type="submit"
                            label="Create account"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
