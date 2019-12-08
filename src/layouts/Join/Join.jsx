import React, { useState } from 'react';
import api from '../../services/api';
import { Checkbox, Button, Input } from '../../components';
import Icon from '@mdi/react';
import { mdiAccount, mdiAt, mdiLock, mdiEye, mdiEyeOff } from '@mdi/js';

export default props => {
    const [inputs, setInputs] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [terms, setTerms] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        api.post('/createUser', { ...inputs })
            .then(response => {
                console.log(response);
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
                <div style={{ marginBottom: 12 }} className="header">
                    <h1 className="logo">Join our community</h1>
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
                                <Icon
                                    path={mdiAccount}
                                    size={0.7}
                                    color="#303030"
                                />
                            }
                            type="text"
                            name="user"
                            placeholder="Username"
                            required
                        />
                        <Input
                            align="left"
                            className="auth-input"
                            icon={
                                <Icon path={mdiAt} size={0.7} color="#303030" />
                            }
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                        />
                        <Input
                            align="left"
                            className="auth-input"
                            icon={[
                                <Icon
                                    key={0}
                                    style={{ order: 0 }}
                                    path={mdiLock}
                                    size={0.7}
                                    color="#303030"
                                />,
                                <Icon
                                    key={1}
                                    onMouseUp={() => setShowPassword(false)}
                                    onMouseDown={() => setShowPassword(true)}
                                    onMouseLeave={() => setShowPassword(false)}
                                    style={{
                                        order: 2,
                                        margin: 0,
                                        cursor: 'pointer',
                                    }}
                                    path={showPassword ? mdiEyeOff : mdiEye}
                                    size={0.7}
                                    color="#303030"
                                />,
                            ]}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            required
                        />
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
                            className="submit-button"
                            type="submit"
                            label="Create account"
                        />
                    </div>
                </form>
                {/* <div className="footer">
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div> */}
            </div>
        </div>
    );
};
