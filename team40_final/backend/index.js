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

const url = "mongodb://127.0.0.1:27017";
const dbName = "finalproject";
const client = new MongoClient(url);
const db = client.db(dbName);

app.get("/NFL", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db.collection("NFL").find(query).limit(100).toArray();
  res.status(200);
  console.log(results);
  res.send(results);
});

app.get("/NBA", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db.collection("NBA").find(query).limit(100).toArray();
  res.status(200);
  res.send(results);
});

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});
