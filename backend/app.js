require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// Logger
if (process.env.NODE_ENV === "dev") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

const connectdDB = require("./config/db");
connectdDB();

app.get("/test", (req, res) => {
  res.json({ msg: "test Router" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
