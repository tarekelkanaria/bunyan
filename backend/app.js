require("dotenv").config();

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const morgan = require("morgan");

app.use(express.json());

// Logger
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

const connectdDB = require("./config/db");
connectdDB();

const adminRoutes = require("./routes/adminRoute");
const userRoutes = require("./routes/userRoutes");
const authUserRoutes = require("./routes/authUserRoutes");

app.get("/test", (req, res) => {
  res.json({ msg: "test Router" });
});

app.use("/api/dashboard", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/user", authUserRoutes);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

require("./sockets/chat.socket")(io);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
