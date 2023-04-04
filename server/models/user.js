const mongoose = require("mongoose");

// User data which will be created in database.

const UserSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
    min: 4,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  }
});


// Registration of User Schema in DataBase.
const User = mongoose.model("User", UserSchema);
// Export so we can call other files like authRouter.js
module.exports = User;
