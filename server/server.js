// const express = require("express");
// var cors = require("cors");
// var bodyParser = require("body-parser");
// var server = express();
// var PORT = process.env.PORT || 3001;

// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser.json());

// var corsOptions = {
//   origin: ["http://localhost:3000", "https://localhost:3000"],
// };

// server.use(cors(corsOptions));

// // router
// server.use("/", require("./routes/user_inform"));

// // database
// const db = require("./config/db");
// db.sequelize.sync();

// server.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const express = require("express");
const app = express();
const user_inform = require("./routes/user_inform");

app.use("/user_inform", user_inform);

const port = 3001;
app.listen(port, () =>
  console.log(`Node.js Server is running on port ${port}...`)
);