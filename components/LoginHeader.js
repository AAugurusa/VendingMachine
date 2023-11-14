import React from 'react';
import styles from '../styles/LoginHeader.module.css';

const LoginHeader = () => {
    return (
        <header>
            <div className={styles.bigContainer} >
                <h1 className={styles.welcomeText}>Bienvenido</h1>
                <p className={styles.infoText}>Por favor ingresa tus datos.</p>
            </div>
        </header>
    );
};
export default LoginHeader;
