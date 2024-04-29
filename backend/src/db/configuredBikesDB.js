const { query } = require('express');
const connection = require('../db/connection');

async function getAllConfiguredBikes() {
    const sql = "SELECT * FROM  configured_bikes";

    try {
        const [result] = await connection.promise().query(sql);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function getConfiguredBikesByID(id) {

    const sql = "SELECT * FROM  configured_bikes WHERE id = ?";

    try {
        const [result] = await connection.promise().query(sql, id);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}



async function addConfiguredBike(frame, color, seat, lights, mudguard, range, motor) {

    const sql = "INSERT INTO configured_bikes (frame, color, seat, lights, mudguard, `range` ,motor) VALUES (?,?,?,?,?,?,?)";
    const params = [frame, color, seat, lights, mudguard, range, motor]

    try {
        const [result] = await connection.promise().query(sql, params);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function editConfiguredBike(frame, color, seat, lights, mudguard, range, motor,id) {

    const sql = "UPDATE configured_bikes  SET frame = ?, color = ?, seat = ?, lights = ?, mudguard = ?, `range` = ? ,motor = ? WHERE id = ?";
    const params = [frame, color, seat, lights, mudguard, range, motor, id]

    try {
        const [result] = await connection.promise().query(sql, params);

        console.log(result)
        return result;
        
        
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function deleteConfiguredBikeByID(id) {

    const sql = "DELETE FROM configured_bikes  WHERE id = ?";

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
addConfiguredBike,
getAllConfiguredBikes,
getConfiguredBikesByID,
editConfiguredBike,
deleteConfiguredBikeByID
}