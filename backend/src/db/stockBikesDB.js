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

module.exports = {
    getStockBikes,
    getStockBikeByID,
    getStockBikesByModel
}