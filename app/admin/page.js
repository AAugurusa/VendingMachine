'use client'

import styles from '../../styles/InformationStyles.module.css';

import AdminInfoComponent from "@/components/AdminInfoComponent";
import BrandInfoComponent from "@/components/BrandInfoComponent";

const MainPage = () => {

    return (
        <div className={styles.boxComponent}>
            <AdminInfoComponent/>
            <BrandInfoComponent/>
        </div>
    );
};
export default MainPage;