require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./src/dbConfig/db");

const app = express();

//helmet for security
const helmet = require("helmet");
app.use(helmet());
app.use("/public", express.static(path.join(__dirname + "/src/public")));

//cors
const corsOptions = require("./src/utils/corsOptions");

app.options("*", cors(corsOptions));

//connecting databse
connectDB();

//to get data in req.body
app.use(express.json({ extended: false, limit: "50mb" }));

app.get("/", (req, res) => {
  //res.send("API WORKING");
  return res.status(401).json({ msg: "Not Authorized" });
});

//routes
app.use("/api/users", cors(corsOptions), require("./src/routes/api/users"));
app.use(
  "/api/auth",
  cors(corsOptions),
  require("./src/routes/api/authentication")
);
app.use(
  "/api/confirmation",
  cors(corsOptions),
  require("./src/routes/api/confirmation")
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});