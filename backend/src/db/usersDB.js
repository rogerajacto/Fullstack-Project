const connection = require("../db/connection");


async function getAllUsers() {
    const sql = "SELECT email FROM  users";

    try {
        const [result] = await connection.promise().query(sql);

        return result;
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}

async function addUser(email,hash) {

    try {
        const sql = "INSERT INTO users (email, hashed_password) VALUES (?,?)";

        const result =  await connection.promise().query(sql,[email, hash]);
    
        return result[0].insertId;
        
    } catch (error) {
        console.log( error);
        return -1;
    }

}

async function selectUser(email) {
    const sql = "SELECT * FROM users WHERE email = ?";

    const result =  await connection.promise().query(sql,[email]);

    const rows = result[0];
    if (rows.length === 1) {
        return rows[0];
    } else {
        return undefined;
    }
}


async function changePassword (hash,email) {

    const sql = "UPDATE users  SET hashed_password = ? WHERE email = ?";

    try {

        const result =  await connection.promise().query(sql,[hash, email]);

        console.log(result)

        return result;
        
        
        
    } catch (error) {
        console.log(error);

        throw new Error ("Database failure")
    }
}


module.exports = {
    addUser,
    selectUser,
    changePassword,
    getAllUsers
}