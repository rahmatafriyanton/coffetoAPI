const express = require("express");
const bodyParser = require("body-parser");
var methodOverride = require("method-override");
const cors = require("cors");
const app = express();
const { sequelize } = require("./src/models/");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  req.io = io;
  req.users_connected = users_connected;
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "It works" });
});

// include auth router
// const auth_router = require("./src/routes/auth.routes");
// app.use("/api/auth/", auth_router);

// Images
// app.use(express.static("public"));
// app.use("/images", express.static("images"));

const PORT = process.env.PORT | 3000;
app.listen(PORT, async () => {
  console.log(`Server up on http://localhost:${PORT}`);
  await sequelize.authenticate({ alter: true });
  console.log("Database Connected!");
});
