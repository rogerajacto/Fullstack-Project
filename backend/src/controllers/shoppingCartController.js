const shoppingCartDB = require("../db/shoppingCartDB");

async function getShoppingList(req, res) {

    try {
        const list = await shoppingCartDB.getShoppingList();

        if (list) {
            res.json(list);
        }
        else{
            res.status(404).send("Items not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function getShoppingItemByID(req, res) {

    const id = req.params.id;

    try {
        const item = await shoppingCartDB.getShoppingItemByID(id);

        if (item) {
            res.json(item);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}



async function addShoppingItem(req, res) {

    const {product, price} = req.body;

    try {
        const result = await shoppingCartDB.addShoppingItem(product, price);

        const item = await shoppingCartDB.getShoppingItemByID(result.insertId);

        if (item) {
            res.json(item);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteShoppingItemByID(req, res) {

    const id = req.params.id;

    try {
        const item = await shoppingCartDB.deleteShoppingItemByID(id);

        if (item) {
            res.json(item);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getShoppingList,
    getShoppingItemByID,
    addShoppingItem,
    deleteShoppingItemByID

}