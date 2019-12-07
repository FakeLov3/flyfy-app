import React, { useState } from 'react';
import api from '../../services/api';
import { Checkbox, SignInButton, Button, IconInput } from '../../components';
import Icon from '@mdi/react';
import { mdiAt, mdiLock } from '@mdi/js';
import './Auth.css';

export default () => {
    const [inputs, setInputs] = useState({});
    const [remember, setRemember] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        api.post('/auth', { ...inputs, remember })
            .then(response => {
                localStorage.token = response.data.token;
                window.location.pathname = '/dashboard';
            })
            .catch(error => console.error(error));
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
                    <h1 className="logo">Flyfy</h1>
                    <p className="presentation">
                        Welcome back. Please login to your account.
                    </p>
                </div>
                <form onSubmit={handleSubmit} onChange={handleInputChange}>
                    <div className="credentials">
                        <IconInput
                            align="left"
                            className="auth-input"
                            icon={
                                <Icon path={mdiAt} size={0.8} color="#303030" />
                            }
                            autoComplete="on"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <IconInput
                            align="left"
                            className="auth-input"
                            icon={
                                <Icon
                                    path={mdiLock}
                                    size={0.8}
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
                            className="submit-button"
                            type="submit"
                            label="Sign In"
                        />
                        <SignInButton />
                        <div className="signup">
                            <p>
                                Not a member yet?{' '}
                                <span
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                >
                                    Signup
                                </span>
                            </p>
                        </div>
                    </div>
                </form>
                <div className="footer">
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};
