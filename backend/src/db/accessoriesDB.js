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

async function addaccessories(name, description, price) {
    const sql = "INSERT INTO accessories (name, description, price) VALUES (?,?,?)";
    const params = [name, description, price]

    try {
        const [result] = await connection.promise().query(sql, params);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function editAccessorie(name, description, price, id) {

    const sql = "UPDATE accessories  SET name = ?, description = ?, price = ?  WHERE id = ?";
    const params = [name, description, price, id];

    try {
        const [result] = await connection.promise().query(sql, params);

        return result;
        
        
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function deleteAccessorie(id) {

    const sql = "DELETE FROM accessories WHERE id = ?";

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
    getAccessoriesByID,
    addaccessories,
    editAccessorie,
    deleteAccessorie

}