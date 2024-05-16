
require ('dotenv').config();
const express = require ('express');
const cookieParser = require("cookie-parser");


const stockBikesRouter = require ("./routes/stockBikesRoute");
const configuredBikesRouter = require ("./routes/configuredBikesRoute");
const accessoriesRouter =  require ("./routes/accessoriesRouter");
const usersRouter =  require ("./routes/usersRoute");
const shoppingCartRouter = require("./routes/shoppingCartRoute");


const cors = require("cors");

const app = express ();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/stockBikes", stockBikesRouter);
app.use("/configuredBikes", configuredBikesRouter);
app.use("/accessories", accessoriesRouter);
app.use("/users", usersRouter);
app.use("/cart", shoppingCartRouter);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});