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
        backgroundColor: '#ffffff',
    },
    googleLogo: {
        width: '16px',
        margin: '0',
        heigth: 'auto',
    },
    signInWithGoogle: {
        margin: 'auto',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#505050',
    },
};
