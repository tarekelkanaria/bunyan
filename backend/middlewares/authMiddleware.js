const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  try {
    // extract header token
    const headerToken = req.headers.authorization;
    if (!headerToken) return res.status(403).json({ msg: "Not authorized" });

    const token = headerToken.split(" ")[1];
    // decode token and add it to request
    const decodedToken = jwt.verify(token, JWT_SECRET);

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(500).json({ msg: "Internal server Error!" });
  }
};

module.exports = authMiddleware;
