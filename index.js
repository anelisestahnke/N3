const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Connect in database
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://yurifxra:n3lp@cluster0.otuw1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
);
mongoose.connection.on(
  "error",
  console.error.bind(console, "Error on connection database!"),
);
mongoose.connection.once("open", () => {
  console.log("Connected to database!");
});

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Parse application/json
app.use(express.json());

require("./models/Pessoa");
require("./models/Sala");

require("./controllers/SalaController")(app);
require("./controllers/PessoaController")(app);

//server connect
app.listen(4000, () => {
  console.log("Server run in url: http://localhost:4000");
});
