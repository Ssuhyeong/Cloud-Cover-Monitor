const express = require("express");
const app = express();
const user_inform = require("./routes/user_inform");

const aws_inform = require("./routes/aws_inform.js");
const azure_inform = require("./routes/azure_inform.js");
const gcp_inform = require("./routes/gcp_inform.js");
const ncp_inform = require("./routes/ncp_inform.js");
const ai_inform = require("./routes/ai_inform");

const aws_data = require("./routes/aws_data");
const azure_data = require("./routes/azure_data");
const gcp_data = require("./routes/gcp_data");
const ncp_data = require("./routes/ncp_data");
const ai_data = require("./routes/ai_data");

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

app.use("/aws_inform", aws_inform);
app.use("/azure_inform", azure_inform);
app.use("/gcp_inform", gcp_inform);
app.use("/ncp_inform", ncp_inform);
app.use("/ai_inform ", ai_inform);

app.use("/aws_data", aws_data);
app.use("/azure_data", azure_data);
app.use("/gcp_data", gcp_data);
app.use("/ncp_data", ncp_data);
app.use("/ai_data", ai_data);

const port = 3001;
app.listen(port, () =>
  console.log(`Node.js Server is running on port ${port}...`)
);
