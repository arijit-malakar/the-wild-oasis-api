const express = require("express");

const cabinRouter = require("./routes/cabinRoutes");
const guestRouter = require("./routes/guestRoutes");

const app = express();

app.use(express.json());

app.use("/api/cabins", cabinRouter);
app.use("/api/guests", guestRouter);

module.exports = app;
