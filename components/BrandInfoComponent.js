'use client'

import styles from '../styles/BrandStyles.module.css';

const BrandInfoComponent = () => {

    return (
        <div className={styles.brandBox}>
            <img src={"/assets/pixelManga.png"} alt={"vector"} width={"750"} height={"375"}/>
        </div>
    );
};

export default BrandInfoComponent;