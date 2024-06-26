const stockBikesDB =  require ('../db/stockBikesDB');

async function getStockBikes(req, res) {
    try {
        const bikes = await stockBikesDB.getStockBikes();

        if (bikes) {
            res.json(bikes);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getStockBikeByID(req, res) {
    const id = req.params.id;

    try {
        const bike = await stockBikesDB.getStockBikeByID(id);

        if (bike) {
            res.json(bike);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getStockBikesByModel(req, res) {

    const model = req.params.model;

    try {
        const bike = await stockBikesDB.getStockBikesByModel(model);

        if (bike) {
            res.json(bike);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function addStockBike(req, res) {

    const {model, autonomy, motor, color, price} = req.body;


    try {
        const result = await stockBikesDB.addStockBike(model, autonomy, motor, color, price);
        const bikes = await stockBikesDB.getStockBikeByID(result.insertId);

        if (bikes) {
            res.json(bikes);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function editStockBike(req, res) {

    const {model, autonomy, motor, color, price} = req.body;
    const id = req.params.id;

    try {
        const bikes = await stockBikesDB.editStockBike(model, autonomy, motor, color, price, id);

        if (bikes) {
            res.json(bikes);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function deleteStockBike(req, res) {

    const id = req.params.id;

    try {
        const bikes = await stockBikesDB.deleteStockBike(id);

        if (bikes) {
            res.json(bikes);
        }
        else{
            res.status(404).send("Item not found");
        }
     
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getStockBikes,
    getStockBikeByID,
    getStockBikesByModel,
    addStockBike,
    editStockBike,
    deleteStockBike
}