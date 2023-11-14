'use client'

import React, {useState, useEffect} from 'react';
import styles from '../styles/LoginForm.module.css';
import {Slide, Snackbar} from "@mui/material";
import {Alert} from "@mui/lab"
import {useRouter} from "next/navigation";
import axios from "axios";


const LoginForm = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("ERROR");
    const router = useRouter();


    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }


    const logInState = async (event) => {
        event.preventDefault()
        console.log("entered login state")
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
            setMessage("El email no es valido.")
            setOpen(true);
            return
        }

        const loginData = {
            mail: email,
            password: password
        }

        try {
            const response = await axios.post('http://localhost:3000/api/user/login', loginData)
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("user", response.data)
                localStorage.setItem("is_admin", response.data.is_Admin)
                response.data.is_Admin ? router.push("/admin") : router.push("/operator")
            }

        } catch (error) {
            // Handle errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // other than 2xx.
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                setMessage("Hubo un error en la solicitud.");
                if (error.response.status === 404) {
                    setMessage("No se encontró el usuario solicitado.");
                }
                if (error.response.status === 405) {
                    setMessage("La contraseña es incorrecta.");
                }
                setOpen(true);
            } else if (error.request) {
                // The request was made but no response was received.
                console.error('No response received:', error.request);
                setMessage("No se recibió respuesta del servidor.");
                setOpen(true);
            } else {
                // Something happened in setting up the request that triggered an Error.
                console.error('Request setup error:', error.message);
                setMessage("Error en la configuración de la solicitud.");
                setOpen(true);
            }
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <form className={styles['form-container']}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Ingresa tu email" onChange={handleEmail}/>
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña"
                       onChange={handlePassword}/>
            </div>

            <button className={styles.button} onClick={logInState}>Iniciar sesión</button>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} TransitionComponent={Slide}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </form>
    );
};

export default LoginForm;
