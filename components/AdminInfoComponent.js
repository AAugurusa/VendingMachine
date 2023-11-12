import {useEffect, useState} from 'react';
import React from "react";
import styles from '../styles/InformationStyles.module.css';

const AdminInfoComponent = () => {

    const [lastRefillDate, setLastRefillDate] = useState(Date.now())
    const [sellingPrice, setSellingPrice] = useState(1.5)
    const [sellingCost, setSellingCost] = useState(1)
    const [editedCost, setEditedCost] = useState(sellingCost);
    const [candyLeft, setCandyLeft] = useState(10)
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        updateSellPrice();
    }, [sellingCost])

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        // Cancel editing and reset the new cost price
        setIsEditing(false);
        setEditedCost(sellingCost);
    };


    const handleSaveClick = () => {
        // Validate and update the new cost price
        const costPrice = parseFloat(editedCost);
        if (!isNaN(costPrice) && costPrice > 0) {
            setSellingCost(costPrice);
            updateSellPrice();
            setIsEditing(false);
        } else {
            // Show an error message or handle invalid input
            console.error('Invalid cost price');
        }
    };

    const updateSellPrice = () => {
        setSellingPrice(sellingCost * 1.5);
    }

    const handleCostInputChange = (event) => {
        // Update the value of the input
        setEditedCost(event.target.value);
    };

    const daysSinceLastRefill = lastRefillDate - Date.now();
    const monthlyProfit = 1;

    return (
        <div className={styles.infoBox}>
            <p className={styles.titleText}>Machine information:</p>
            <p className={styles.text}> Remaining stock: {candyLeft}</p>
            <p className={styles.text}> Selling price: {sellingPrice}$</p>
            <p className={styles.text}> Cost price: {isEditing ? (
                <input
                    className={styles.input}
                    type="number"
                    min="1"
                    value={editedCost}
                    onChange={handleCostInputChange}
                />
            ) : (
                `${sellingCost}$`
            )}</p>
            <p className={styles.text}> Monthly profit: {monthlyProfit}$</p>

            {isEditing ? (
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleSaveClick}>Save</button>
                    <button className={styles.button} onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <button className={styles.button} onClick={handleEditClick}>Edit Cost Price</button>
            )}

            <p className={styles.miniText}>currently as administrator </p>
        </div>
    );
};


export default AdminInfoComponent;
