require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger1.json");

//my routes
const authroutes = require("./routes/auth");
//db connection
mongoose
  .connect(
    process.env.DATABASE,

    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch(console.log("DB is not connected"));
// this is my middlwer
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api", authroutes);
//swagger

//port
const port = process.env.PORT || 4400;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//starting server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
