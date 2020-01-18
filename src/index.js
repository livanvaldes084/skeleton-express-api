const express = require("express");
const path = require("path");
const winston = require("winston");

const app = express();

app.listen(process.env.PORT, () => {
  winston.info(`EXPRESS: 3051`);
});
