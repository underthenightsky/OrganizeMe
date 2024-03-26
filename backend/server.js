const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db.js");
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
console.log(process.env.PORT);
const PORT = process.env.PORT || 3000||8901;

const taskRoutes = require('./routes.js');

app.use('/Tasks', taskRoutes);

app.listen(PORT , () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode  on port ${PORT}`
  );
});
module.exports = PORT;