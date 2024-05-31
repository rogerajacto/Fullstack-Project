const { query } = require('express');
const connection = require('../db/connection');

async function getStockBikes() {

    const sql = "SELECT * FROM stock_bikes";


    try {
        const [result] = await connection.promise().query(sql);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function getStockBikesByModel(model) {

    const sql = 'SELECT * FROM stock_bikes WHERE model LIKE ?'
   


    try {
        const [result] = await connection.promise().query(sql, ["%"+model+"%"]);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}


async function getStockBikeByID(id) {

    const sql = "SELECT * FROM stock_bikes WHERE id = ?";
    


    try {
        const [result] = await connection.promise().query(sql, id);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function addStockBike(model, autonomy, motor, color, price) {

    const sql = "INSERT INTO stock_bikes (model, autonomy, motor, color, price) VALUES (?,?,?,?,?)";
    const params = [model, autonomy, motor, color, price]

    try {
        const [result] = await connection.promise().query(sql, params);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function editStockBike(model, autonomy, motor, color, price, id) {

    const sql = "UPDATE stock_bikes  SET model = ?, autonomy = ?, motor = ?, color = ?, price = ?  WHERE id = ?";
    const params = [model, autonomy, motor, color, price, id]

    try {
        const [result] = await connection.promise().query(sql, params);

        return result;
        
        
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function deleteStockBike(id) {

    const sql = "DELETE FROM stock_bikes WHERE id = ?";

    try {
        const [result] = await connection.promise().query(sql, id);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}


module.exports = {
    getStockBikes,
    getStockBikeByID,
    getStockBikesByModel,
    addStockBike,
    editStockBike,
    deleteStockBike
}