const usersDB = require("../db/usersDB");
const hashedPassword = require ("../services/encryptionService");
const validator = require ('validator')

async function addUser(req, res) {
    try {
        const {email, password} = req.body;

        if (validator.isEmpty(email) || !validator.isEmail(email)) {

          res.status(400).json({
            message: "Invalid E-mail Format"
        })
            return;
        }

        else if (validator.isEmpty(password)  || password.length > 14 ) {
            res.status(400).json({
                message: "Invalid password, must have beetween 4 and 14 characters"
            })
                return;
        }
        else if (validator.isEmpty(password)  || password.length < 4 ) {
            res.status(400).json({
                message: "Invalid password, must have beetween 4 and 14 characters"
            })
                return;
        }
        else{

            const hash = await hashedPassword.createHash(password);

            const userId = await usersDB.addUser(email, hash);
    
    
            if (userId === -1) {
                res.status(400).json({
                    message: "Error on user registration, user already created!"
                })
                return;
            }
        
                res.json({
                    email,
                    userId
                })
                
            res.status(400).json({
                message: "New Account Created!"
            })
        }


        

    } catch (error) {
        
        res.status(500).send(error.message);

    }
}

async function loginUser(req, res) {


    const { email, password } = req.body;

    const user = await usersDB.selectUser(email);

    
    // console.log(user);
    // console.log(email)

    if (user == undefined) {
        res.status(400).json({
            message: "User not found"
        })
        return;
    }

    const result = await hashedPassword.verifyHash(user.hashed_password, password);
    if (result !== true) {
        res.status(400).json({
            status: "Fail",
            message: "wrong password"
        })
        return;
    }

    if (result == true) {
        res.status(400).json({
            status: "Success",
            message: "User Logged In"
        })
        return;
    }



    const cookieData = {
        userEmail: user.email
    }
    const jsonCookieData = JSON.stringify(cookieData);

    res.cookie("LoggedIn", jsonCookieData, {
        httpOnly: true,
        sameSite: "none",
        secure: true
      });

    res.json({
        status: "success",
        message: "user Logged In"
    });

}

module.exports ={
    addUser,
    loginUser
}