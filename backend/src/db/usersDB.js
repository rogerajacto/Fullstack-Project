const connection = require("../db/connection");

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

module.exports = {
    addUser,
    selectUser
}