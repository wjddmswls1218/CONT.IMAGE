const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();
const cors = require("cors");

const oneRouter = require("./routers/oneRouter");
const twoRouter = require("./routers/twoRouter");
const threeRouter = require("./routers/threeRouter");

const app = express();

app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/one", oneRouter);
app.use("/two", twoRouter);
app.use("/three", threeRouter);

app.listen(process.env.PORT, () => {
  console.log("Controll Image Web Server Start");
});
