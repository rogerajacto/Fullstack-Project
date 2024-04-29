
require ('dotenv').config();
const express = require ('express');

const stockBikesRouter = require ("./routes/stockBikesRoute");
const configuredBikesRouter = require ("./routes/configuredBikesRoute");
const accessoriesRouter =  require ("./routes/accessoriesRouter");

const cors = require("cors");

const app = express ();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/stockBikes", stockBikesRouter);
app.use("/configuredBikes", configuredBikesRouter);
app.use("/accessories", accessoriesRouter);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});