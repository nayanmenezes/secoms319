var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
app.use(express.static("public"));
app.use("/images", express.static("images"));

const url = "mongodb://127.0.0.1:27017";
const dbName = "finalproject";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/NBA", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db.collection("NBA").find(query).limit(100).toArray();
  res.status(200);
  console.log(results);
  res.send(results);
});

app.get("/NFL", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db.collection("NFL").find(query).limit(100).toArray();
  res.status(200);
  console.log(results);
  res.send(results);
});

app.delete("/delete/:category/:alt", async (req, res) => {
  await client.connect();
  const altDescription = req.params.alt;
  const collection = req.params.category;
  console.log(altDescription);
  console.log(collection);
  console.log("Node connected successfully to DELETE MongoDB");
  const query = { alt: altDescription };
  const results = await db.collection(collection).deleteOne(query);
  res.status(200);
  console.log(results);
  res.send(results);
});

app.post("/post", async (req, res) => {
  await client.connect();
  let collection = "";
  if (req.body.league == "NBA") {
    collection = "NBA";
  } else {
    collection = "NFL";
  }

  const card = {
    src: req.body.src,
    alt: req.body.alt,
    description: req.body.description,
    buyPrice: Number(req.body.buyPrice),
    bidPrice: Number(req.body.bidPrice),
    league: collection,
  };
  const results = await db.collection(collection).insertOne(card);
});

app.put("/update/:alt", async (req, res) => {
  const altDescription = req.params.alt;
  const price = Number(req.body.price);
  let collection = req.body.league;
  const results = await db
    .collection(collection)
    .updateOne({ alt: altDescription }, { $set: { bidPrice: price } });
  console.log(results);
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
