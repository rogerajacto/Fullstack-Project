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
        const accessories = await accessoriesDB.getAccessories(id);

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

module.exports = {
    getAccessories,
    getAccessoriesByID
}