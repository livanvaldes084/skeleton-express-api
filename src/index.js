import express from "express";
import winston from "winston";
import path from "path";

const app = express();

app.listen(process.env.PORT, () => {
  winston.info(`EXPRESS: 3051`);
});
