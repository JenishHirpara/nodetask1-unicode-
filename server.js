const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const restaurants = require("./routes/restaurants");
const menuitems = require("./routes/menuitems");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/restaurants", restaurants);
app.use("/api/v1/menuitems", menuitems);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

server.on("Unhandled Rejection", (error, promise) => {
  console.log(`ERROR:${error.message}`);
  server.close(() => process.exit(1));
});
