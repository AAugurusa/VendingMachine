'use client'

import styles from '../styles/InformationStyles.module.css';
import React, {useState} from "react";

const OperatorInfoComponent = () => {

    const defaultLastRefillDate = new Date(2023, 10, 1); // Note: Months are zero-based (10 is November)

    const [lastRefillDate, setLastRefillDate] = useState(defaultLastRefillDate);
    const [candyLeft, setCandyLeft] = useState(10)
    const [addedCandy, setAddedCandy] = useState(0)
    const [isEditing, setIsEditing] = useState(false);




    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        // Cancel editing and reset the new cost price
        setIsEditing(false);
        setAddedCandy(0);
    };


    const handleSaveClick = () => {
        const addedCandyValue = parseInt(addedCandy, 10);
        if (!isNaN(addedCandy) && addedCandy > 0) {
            const newStock = candyLeft + addedCandyValue;
            setCandyLeft(newStock);
            setLastRefillDate(new Date()); // Update lastRefillDate to the current date
            setIsEditing(false);
        } else {
            // Show an error message or handle invalid input
            console.error('Invalid stock');
        }
    };
    const handleAddedCandyInputChange = (event) => {
        setAddedCandy(event.target.value);
    }

    return (
        <div className={styles.infoBox}>
            <p className={styles.titleText}>Machine information:</p>
            <p className={styles.text}> Remaining stock: {isEditing ? (
                <input
                    className={styles.input}
                    type="number"
                    min="1"
                    value={addedCandy}
                    onChange={handleAddedCandyInputChange}
                />
            ) : (
                `${candyLeft}`
            )}</p>
            <p className={styles.text}>Last refill date: {lastRefillDate.toLocaleDateString('en-GB')}</p>
            <br></br>
            {isEditing ? (
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleSaveClick}>Save</button>
                    <button className={styles.button} onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <button className={styles.button} onClick={handleEditClick}>Add stock</button>
            )}
            <p className={styles.miniText}> currently as operator </p>
        </div>
    );
};

export default OperatorInfoComponent;