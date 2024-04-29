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

module.exports = {
    getStockBikes,
    getStockBikeByID
}