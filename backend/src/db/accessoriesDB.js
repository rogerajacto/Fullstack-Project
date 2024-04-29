const { query } = require('express');
const connection = require('../db/connection');

async function getAccessories() {
    const sql = "SELECT * FROM  accessories";

    try {
        const [result] = await connection.promise().query(sql);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}


async function getAccessoriesByID(id) {
    const sql = "SELECT * FROM  accessories WHERE id = ?";

    try {
        const [result] = await connection.promise().query(sql, id);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

module.exports = {
    getAccessories,
    getAccessoriesByID
}