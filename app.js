const path = require("path");
const express = require("express");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cabinRouter = require("./routes/cabinRoutes");
const guestRouter = require("./routes/guestRoutes");
const settingsRouter = require("./routes/settingsRoutes");

const app = express();

app.use(express.json());

const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));

app.use("/api/cabins", cabinRouter);
app.use("/api/guests", guestRouter);
app.use("/api/settings", settingsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
