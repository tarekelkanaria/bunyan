const jwt = require("jsonwebtoken");
const socketAuthMiddleware = (socket, next) => {
  try {
    const token = socket.handshake.headers.token;
    if (!token) return next(new Error("Not Found Token"));
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    socket.role = payload.role;
    next();
  } catch (error) {
    return next(new Error("Invalid Token"));
  }
};

const socketChatController = (io) => {
  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {
    console.log(`userId Is ${socket.userId} & Role ${socket.role}`);

    if (socket.role === "admin") {
      socket.join("room_admin");
    } else if (socket.role === "user") {
      socket.join(`room_${socket.userId}`);
    }

    socket.on("sendMsg", (data) => {
      io.to("room_admin").emit("reqMsg", {
        msg: data.msg,
        user: socket.userId,
      });
    });

    socket.on("replayAdmin", (data) => {
      // socket.join
      // socket.emit
      socket.join(`room_${data.targetuser}`);
      socket.emit("reqReplay", {
        msg: data.msg,
      });
    });
  });
};

module.exports = socketChatController;
