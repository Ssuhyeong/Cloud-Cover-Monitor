const express = require("express");
const app = express();
const user_inform = require("./routes/user_inform");
const wrk_inform = require("./routes/wrk_inform.js")
const cors = require("cors");

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhsost:3001",
    "http://15.165.203.129",
    "http://15.165.203.129:3000",
  ],
};

app.use(cors(corsOptions));

app.use("/user_inform", user_inform);
app.use("/wrk_inform", wrk_inform);

const port = 3001;
app.listen(port, () =>
  console.log(`Node.js Server is running on port ${port}...`)
);
