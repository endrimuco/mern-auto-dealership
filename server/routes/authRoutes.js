const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const app = express();

// Registration of a user.
app.post("/register", async (req, res) => {
  // Info from the form completed by user.
  const userInfo = req.body.user;

  // Condition of password must have 8 characters or more.
  if (userInfo.password.length < 8) {
    return res.status(400).send({
      code: 400,
      error: "Password must have 8 characters or more.",
    });
  }

  try {
    // Check if the email already exists.
    const foundUser = await User.findOne({
      $or: [{ email: userInfo.email }, { username: userInfo.username }],
    }).exec();

    if (foundUser) {
      return res.status(400).send({
        code: 400,
        error: "This email or username already exists!",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      code: 500,
      error: "Error occurred while checking for existing user.",
    });
  }

  // Encryption of password using salt.
  const salt = await bcrypt.genSalt(15);
  const hashedPassword = await bcrypt.hash(userInfo.password, salt);

  // Save user information to the database.
  const user = new User({
    username: userInfo.username,
    email: userInfo.email,
    password: hashedPassword,
  });

  user.save((error, userCreated) => {
    if (error) {
      console.error(error);
      return res.status(500).send({
        code: 500,
        error: "Error occurred while saving user.",
      });
    }
    const resError = {
      code: 200,
      message: "User has been saved successfully",
    };
    res.send(resError);
  });
});

// Login auth.
app.post("/checkLogin", async (req, res) => {
  // Data for email or username and password to login.
  const { email, username, password } = req.body.user;

  try {
    // Find user account with email or username.
    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (user) {
      // Compare the provided password with the stored hashed password.
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          // If password matches, access granted.
          res.send({ code: 200, user: user });
        } else {
          // If password doesn't match.
          res.status(400).send({ code: 400, error: "Enter valid credentials." });
        }
      });
    } else {
      // If user not found.
      res.status(400).send({ code: 400, error: "Enter valid credentials." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ code: 500, error: "Internal Server Error" });
  }
});

// Function for user logout.
app.get("/logout", (req, res) => {
  const resError = {
    code: 200,
    message: "User has been logged out!",
  };
  res.send(resError);
});

module.exports = app;
