const accessoriesDB = require ("../db/accessoriesDB");

async function getAccessories(req, res) {

    try {
        const accessories = await accessoriesDB.getAccessories();

        if (accessories) {
            res.json(accessories);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getAccessoriesByID(req, res) {

    const id = req.params.id;

    try {
        const accessories = await accessoriesDB.getAccessoriesByID(id);

        if (accessories) {
            res.json(accessories);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function addAccessories(req, res) {
    const {name, description, price} =  req.body;

    try {
        const result = await accessoriesDB.addaccessories(name, description, price);

        const accessories =  await accessoriesDB.getAccessoriesByID(result.insertId);

        if (accessories) {
            res.json(accessories)
        }
        else{
            res.status(404).send("Item not found");
        }


    } catch (error) {
        res.status.send(error.message);
    }
}

async function editAccessories(req, res) {
    const {name, description, price} =  req.body;
    const id = req.params.id;

    try {

        const accessories =  await accessoriesDB.editAccessorie(name, description, price, id);

        if (accessories) {
            res.json(accessories)
        }
        else{
            res.status(404).send("Item not found");
        }


    } catch (error) {
        res.status.send(error.message);
    }
}

async function deletAccessories(req, res) {

    const id = req.params.id;

    try {

        const accessories =  await accessoriesDB.deleteAccessorie(id);

        if (accessories) {
            res.json(accessories)
        }
        else{
            res.status(404).send("Item not found");
        }


    } catch (error) {
        res.status.send(error.message);
    }
}



module.exports = {
    getAccessories,
    getAccessoriesByID,
    addAccessories,
    editAccessories,
    deletAccessories
}