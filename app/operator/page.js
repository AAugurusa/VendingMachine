'use client'

import styles from '../../styles/InformationStyles.module.css';

import BrandInfoComponent from "@/components/BrandInfoComponent";
import OperatorInfoComponent from "@/components/OperatorInfoComponent";
import {useEffect} from "react";

const MainPage = () => {

    useEffect(() => {
        localStorage.getItem("user") ? console.log("user logged", localStorage.getItem("user")) : window.location.replace("/")
    }, [])

    return (
        <div className={styles.boxComponent}>
            <OperatorInfoComponent/>
            <BrandInfoComponent/>
        </div>
    );
};
export default MainPage;
