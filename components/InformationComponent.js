'use client'

import styles from '../styles/InformationStyles.module.css';

const InformationComponent = ({candyLeft, sellingHistory, lastRefillDate, sellingPrice, sellingCost}) => {

    lastRefillDate = Date.now()
    sellingPrice = 2
    sellingCost = 1
    candyLeft = 10;

    const daysSinceLastRefill = lastRefillDate - Date.now();
    const monthlyProfit = 1

    return (
        <div className={styles.infoBox}>
            <p className={styles.titleText}>Machine information:</p>
            <p className={styles.text}> Remaining stock: {candyLeft}</p>
            <p className={styles.text}> Selling price: {sellingPrice}$</p>
            <p className={styles.text}> Cost price: {sellingCost}$</p>
            <p className={styles.text}> Monthly profit: {monthlyProfit}$</p>
            <p className={styles.text}> Days since last refill: {daysSinceLastRefill}</p>
        </div>
    );
};

export default InformationComponent;