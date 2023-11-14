'use client'

import styles from '../../styles/InformationStyles.module.css';
import {useEffect} from 'react';
import React from "react";

import AdminInfoComponent from "@/components/AdminInfoComponent";
import BrandInfoComponent from "@/components/BrandInfoComponent";

const MainPage = () => {

    useEffect(() => {
        localStorage.getItem("user") ? console.log("user logged", localStorage.getItem("user")) : window.location.replace("/")
        localStorage.getItem("is_admin") === "true" ? console.log("user logged") : window.location.replace("/operator")

    }, [])

    return (
        <div className={styles.boxComponent}>
            <AdminInfoComponent/>
            <BrandInfoComponent/>
        </div>
    );
};
export default MainPage;
