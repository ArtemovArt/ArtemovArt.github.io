import config from "config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = config.get("serverPort");

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server Started on port", PORT);
    });
  } catch (error) {}
};

start();
