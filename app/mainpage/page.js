'use client'

import styles from '../../styles/InformationStyles.module.css';

import InformationComponent from "@/components/InformationComponent";
import MachineInfoComponent from "@/components/MachineInfoComponent";

const MainPage = () => {

    return (
        <div className={styles.boxComponent}>
            <InformationComponent/>
            <MachineInfoComponent/>
        </div>
    );
};
export default MainPage;