const configuredBikesDB = require ("../db/configuredBikesDB");

async function getAllConfiguredBikes(req, res) {

    try {
        const bikes = await configuredBikesDB.getAllConfiguredBikes();

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

async function getConfiguredBikesByID(req, res) {

    const id = req.params.id;

    try {
        const bikes = await configuredBikesDB.getConfiguredBikesByID(id);

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

async function addConfiguredBike(req, res) {

    const {frame, color, seat, lights, mudguard, range, motor} = req.body;

    try {
        const result = await configuredBikesDB.addConfiguredBike(frame, color, seat, lights, mudguard, range, motor);
        const bikes = await configuredBikesDB.getConfiguredBikesByID(result.insertId);

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

async function editConfiguredBike(req, res) {

    const {frame, color, seat, lights, mudguard, range, motor} = req.body;
    const id = req.params.id;

    try {
        const bikes = await configuredBikesDB.editConfiguredBike(frame, color, seat, lights, mudguard, range, motor, id);

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

async function deleteConfiguredBikeByID(req, res) {

    const id = req.params.id;

    try {
        const bikes = await configuredBikesDB.deleteConfiguredBikeByID(id);

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
    addConfiguredBike,
    getAllConfiguredBikes,
    getConfiguredBikesByID,
    editConfiguredBike,
    deleteConfiguredBikeByID
}