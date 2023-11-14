import React from 'react';
import styles from '../styles/LogoutButton.module.css';
import {useRouter} from 'next/navigation';

const LoginHeader = () => {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem('user')
        router.push('/');
    }
    return (
        <button className={styles.LogoutButton} onClick={handleLogout}>Cerrar sesión</button>
    );
};
export default LoginHeader;
