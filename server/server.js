const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const vehicleRouter = require("./routes/vehicleRoutes.js");
const authRouter = require("./routes/authRoutes.js");

const app = express();
app.use(cors());

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Limit of uploading for images.
app.use(express.static("images"));
app.use(express.json({ limit: "1000mb", extended: true }));
app.use(
  express.urlencoded({ limit: "1000mb", extended: true, parameterLimit: 500000 })
);

// Connection to the MongoDB database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB.');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(vehicleRouter);
app.use(authRouter);

app.listen(PORT, () => {
  console.log("Server is running at port ${PORT}");
});

