const express = require("express");
const bcrypt = require("bcrypt"); 
const userModel = require("../models/user");

const app = express();

// Registration of a user.
app.post("/register", async (req, res) => {

  // Info from the form completed by user.
  const userInfo = req.body.user;
  
  // Condition of password must have 8 words and plus!
  if (userInfo.password.length < 8) {
    return res.send({
      
      code: 400,
      // Console Log.
      error: "Password must have 8 chars and plus.",

    });
  }

  //  If same email found an error will be shown.
  try {

    var foundUser = await userModel.findOne(
      { email: userInfo.email, username: userInfo.email }).exec();

    if (foundUser && foundUser.length != 0) {

      return res.send(
        { 
          code: 400, 
          error: "This email already exists!" 
        });
    }
  } catch (error) {

    return res.send(
      { 
        code: 400, 
        error: error 
      });

  }
   
  // Encryption of password, using salt it marges 15 random words to make it even difficult to find.
  const salt = await bcrypt.genSalt(15);
  
  
  // Encrypted password.
  hashed = await bcrypt.hash(userInfo.password, salt);


  // Frontend infos saving them to database.
  var user = new userModel({
    username: userInfo.username,
    email: userInfo.email,
    password: hashed,
  });

  // Saving infos.
  user.save(function (error, userCreated) {
    if (error) return handleError(error);
    var resError = {
      code: 200,
      message: "User has been saved successfully",
    };
    res.send(resError);
  });
});

// Login auth.
app.post("/checkLogin", async (req, res) => {

  // Data for only email and password to login.
  const email = req.body.user.email;
  const username = req.body.user.username;
  const password = req.body.user.password;

// Finding data of user from email in database.
var user = await userModel.findOne({ $or: [ {email: email }, {username: username} ] }).exec();
  
  // Verification of password and decryption of it.
  if (user && user.length != 0) {
   
    // Decryption of password.
    bcrypt.compare(password, user.password, function (error, result) {
      if (result) {

        // If found access granted.
        res.send(
          { 
            code: 200, 
            user: user 
          });
z
      } else {

        // Else not.
      res.send(
        { 
          code: 400, 
          error: "Enter valid credentials." 
        });
    }
    });
  }

  // If user not found.
  else {

    res.send(
      { 
        code: 400, 
        error: "Enter valid credentials" 
      });

  }
});

// Function of user logout.
app.get("/logout", (req, res) => {
  var resError = {
    code: 200,
    message: "User has been logged out!",
  };
  res.send(resError);
});


module.exports = app;
