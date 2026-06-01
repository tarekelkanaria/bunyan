require("dotenv").config();

const mongoose = require("mongoose");
const Admin = require("../models/Admin");

const addSuperAdmin = async () => {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is matched with app.js");

    // Check if user existed
    const existedAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (existedAdmin) {
      return console.log("Account Is Found");
    }

    // Create new admin
    const superAdmin = {
      username: process.env.SUPER_ADMIN_NAME,
      email: process.env.SUPER_ADMIN_EMAIL,
      password: process.env.SUPER_ADMIN_PASS,
    };
    const admin = await Admin.create(superAdmin);
    console.log(admin);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
    console.log("DB Is Closed");
    process.exit(0);
  }
};

addSuperAdmin();
