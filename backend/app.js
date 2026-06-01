require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

// Logger
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

const connectdDB = require("./config/db");
connectdDB();

const adminRoutes = require("./routes/adminRoute");

app.use("/api/dashboard", adminRoutes);

app.get("/test", (req, res) => {
  res.json({ msg: "test Router" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
