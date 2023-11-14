import {useEffect, useState} from 'react';
import React from "react";
import styles from '../styles/InformationStyles.module.css';
import axios from "axios";

const AdminInfoComponent = () => {

    const [lastRefillDate, setLastRefillDate] = useState(Date.now())
    const [sellingPrice, setSellingPrice] = useState('')
    const [sellingCost, setSellingCost] = useState('')
    const [editedCost, setEditedCost] = useState('');
    const [candyLeft, setCandyLeft] = useState('')
    const [monthlyProfit, setMonthlyProfit] = useState('')
    const [isEditing, setIsEditing] = useState(false);
    const [sales, setSales] = useState([])




    useEffect(() => {
        const fetchCandy = () => {
            const apiUrl = `http://localhost:3000/api/admin/candy`;
            axios.get(apiUrl).then((response) => {
                const candy = response.data;
                setCandyLeft(candy.stock);
                setSellingPrice(candy.price)
                setSellingCost(candy.cost)
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
        fetchCandy();
    },[sellingCost])

    useEffect(() => {
        const fetchSales = () => {
            const apiUrl = `http://localhost:3000/api/sale/sales`;
            axios.get(apiUrl).then((response) => {
                setSales(response.data)
                calculateProfit()
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
        fetchSales();

    },[])

    useEffect(() => {
        calculateProfit();
    }, [sales])

    const calculateProfit = () => {
        let profit = 0;
        sales.forEach(sale => {
            profit += (sale.price - sale.price * (1/1.5)) * sale.quantity
        })

        setMonthlyProfit(profit.toFixed(2))

        console.log(profit)
    }

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
            postEditedPrice(costPrice);
            setIsEditing(false);
        } else {
            // Show an error message or handle invalid input
            console.error('Invalid cost price');
        }
    };

    const postEditedPrice = (costPrice) => {
        const apiUrl = `http://localhost:3000/api/admin/candy`;
        const updatedPrice = costPrice * 1.5;
        const candyData = {
            price: updatedPrice,
            cost: costPrice,
            stock: candyLeft
        }
        axios.post(apiUrl, candyData).then(r => console.log(r.data)).catch(e => console.log(e))
    }


    const handleCostInputChange = (event) => {
        // Update the value of the input
        setEditedCost(event.target.value);
    };

    const daysSinceLastRefill = lastRefillDate - Date.now();

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
