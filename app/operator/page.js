'use client'

import styles from '../../styles/InformationStyles.module.css';

import AdminInfoComponent from "@/components/AdminInfoComponent";
import BrandInfoComponent from "@/components/BrandInfoComponent";
import OperatorInfoComponent from "@/components/OperatorInfoComponent";

const MainPage = () => {

    return (
        <div className={styles.boxComponent}>
            <OperatorInfoComponent/>
            <BrandInfoComponent/>
        </div>
    );
};
export default MainPage;