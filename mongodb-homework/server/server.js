const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");

// ;
const router = require("./routes/server.route");
require("dotenv").config();
const { connect } = require("./db/connected");
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.get("/", (req, res) => {
  console.log("server is very good ❤");
  res.send("ttt");
});

const port = process.env.port || 2000;
const start = async () => {
  try {
    await connect(process.env.mongo_uri);
    app.listen(port, () => {
      console.log("server run 🐱‍🏍");
    });
  } catch (er) {
    console.log(er);
  }
};
start();
