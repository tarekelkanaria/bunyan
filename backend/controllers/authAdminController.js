const Admin = require("../models/Admin");
const adminSchema = require("./validation/authAdminValidation");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {
    // validate by joi
    const { error, value } = adminSchema.validate(req.body, {
      abortEarly: true,
      stripUnknown: false,
    });
    // show error
    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message).join(", "),
      });
    }
    // check admin account in DB
    const { email, password } = value;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(403).json({ msg: "Invalid email" });

    // Compare password
    const matchedPassword = await admin.comparePassword(password);
    if (!matchedPassword)
      return res.status(403).json({ msg: "Invalid email or password" });
    // Crate token
    const token = await jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    // Response
    res.status(200).json({
      msg: "Success login",
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

module.exports = loginAdmin;
