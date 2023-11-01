'use client'

import styles from '../styles/InformationStyles.module.css';

const OperatorInfoComponent = ({candyLeft, lastRefillDate}) => {

    candyLeft = 10;

    const daysSinceLastRefill = lastRefillDate - Date.now();

    return (
        <div className={styles.infoBox}>
            <p className={styles.titleText}>Machine information:</p>
            <p className={styles.text}> Remaining stock: {candyLeft}</p>
            <p className={styles.text}> Days since last refill: {daysSinceLastRefill}</p>
            <br></br>
            <p className={styles.miniText}> currently as operator </p>
        </div>
    );
};

export default OperatorInfoComponent;