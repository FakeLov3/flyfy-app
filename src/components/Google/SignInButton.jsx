import React from 'react';
import { Button } from '../';
import google from '../../assets/images/google.svg';

export default props => {
    return (
        <Button onClick={props.onClick} style={styles.buttonContainer}>
            <img alt="Google" style={styles.googleLogo} src={google} />
            <p style={styles.signInWithGoogle}>Sign in with Google</p>
        </Button>
    );
};

const styles = {
    buttonContainer: {
        margin: 'auto',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        boxShadow: 'rgba(48, 48, 48, 0.25) 0px 0px 1.75px 0.75px',
    },
    googleLogo: {
        width: '16px',
        margin: '0 18px 0 0',
        heigth: 'auto',
    },
    signInWithGoogle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#505050',
    },
};
