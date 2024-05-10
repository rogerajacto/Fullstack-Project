const { query } = require('express');
const connection = require('../db/connection');

async function getShoppingList() {

    const sql = "SELECT * FROM shopping_cart";


    try {
        const [result] = await connection.promise().query(sql);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function getShoppingItemByID(id) {

    const sql = "SELECT * FROM shopping_cart WHERE id = ?";
    


    try {
        const [result] = await connection.promise().query(sql, id);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function addShoppingItem(product, price) {

    const sql = "INSERT INTO shopping_cart (product, price) VALUES (?,?)";
    const params = [product, price]

    try {
        const [result] = await connection.promise().query(sql, params);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}


async function deleteShoppingItemByID(id) {

    const sql = "DELETE FROM shopping_cart WHERE id = ?";

    try {
        const [result] = await connection.promise().query(sql,id);

        console.log(result)
        return result;
        
        
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}


module.exports = {
    getShoppingList,
    getShoppingItemByID,
    addShoppingItem,
    deleteShoppingItemByID
}