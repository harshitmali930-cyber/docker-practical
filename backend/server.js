const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const mongoUrl = "mongodb://database:27017";
const client = new MongoClient(mongoUrl);

app.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("dockerdb");

    res.json({
      message: "Backend is running and connected to MongoDB successfully!"
    });
  } catch (error) {
    res.status(500).json({
      error: "Database connection failed"
    });
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
