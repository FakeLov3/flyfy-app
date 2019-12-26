import React, { useState, useContext } from 'react';
import { LoaderContext } from '../../config/context';
import api from '../../services/api';
import { Checkbox, SignInButton, Button, Input } from '../../components';
import Icon from '@mdi/react';
import { mdiAt, mdiLock } from '@mdi/js';

export default () => {
    const [inputs, setInputs] = useState({});
    const [remember, setRemember] = useState(false);
    const { setLoader } = useContext(LoaderContext);

    const handleSubmit = event => {
        event.preventDefault();
        setLoader('active');
        api.post('/auth', { ...inputs, remember })
            .then(({ data }) => {
                localStorage.token = data.token;
                window.location.pathname = '/';
            })
            .catch(error => {
                setLoader('');
            });
    };

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div className="layout auth">
            <div className="container card">
                <div className="header">
                    <h1 className="logo">flyfy</h1>
                    <p className="presentation">
                        Welcome back. Please login to your account.
                    </p>
                </div>
                <form
                    spellCheck={false}
                    onSubmit={handleSubmit}
                    onChange={handleInputChange}
                >
                    <div className="credentials">
                        <Input
                            align="left"
                            className="auth-input"
                            icon={
                                <Icon path={mdiAt} size={0.7} color="#303030" />
                            }
                            autoComplete="on"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <Input
                            align="left"
                            className="auth-input"
                            icon={
                                <Icon
                                    path={mdiLock}
                                    size={0.7}
                                    color="#303030"
                                />
                            }
                            autoComplete="on"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="options">
                        <div className="checkbox-wrapper">
                            <Checkbox
                                onClick={() =>
                                    setRemember(remember => !remember)
                                }
                                active={remember}
                            />
                            <p
                                onClick={() =>
                                    setRemember(remember => !remember)
                                }
                                className="remember"
                            >
                                Remember me
                            </p>
                        </div>
                        <p
                            style={{ cursor: 'pointer' }}
                            onClick={() => console.log('forgot')}
                        >
                            Forgot password?
                        </p>
                    </div>
                    <div className="submit">
                        <Button
                            className="submit-button active"
                            type="submit"
                            label="Sign in"
                        />
                        <SignInButton />
                        <div className="signup">
                            <p>
                                Not a member yet?{' '}
                                <span
                                    onClick={() =>
                                        (window.location.pathname = '/join')
                                    }
                                    style={{
                                        cursor: 'pointer',
                                        color: 'blue',
                                        fontFamily: 'Circular',
                                    }}
                                >
                                    Signup
                                </span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
