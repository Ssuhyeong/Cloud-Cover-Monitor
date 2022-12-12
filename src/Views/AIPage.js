import { Box, Card, Typography } from "@mui/material";
import LineGraph from "../Components/LineGraph";
import AILineGraph from "../Components/TotalLineGraph";

import { useState, useEffect } from "react";
import axios from "../utils/axios";

const AwsPage = () => {
  const [Aws_ai_data, setAws_ai_data] = useState([
    { Aws_ai_data: 0, date: "" },
  ]);
  const [Azure_ai_data, setAzure_ai_data] = useState([
    { Azure_ai_data: 0, date: "" },
  ]);
  const [Gcp_ai_data, setGcp_ai_data] = useState([
    { Gcp_ai_data: 0, date: "" },
  ]);

  useEffect(() => {
    const refresh = () => {
      axios
        .get("/ai_data/Data")
        .then((res) => {
          const data = res.data;
          if (data === undefined) return;
          setAws_ai_data(
            data.map((col) => ({
              Aws_ai_data: col["aws_ai_data"],
              date: col["time"].substr(0, 5),
            }))
          );
          setAzure_ai_data(
            data.map((col) => ({
              Azure_ai_data: col["azure_ai_data"],
              date: col["time"].substr(0, 5),
            }))
          );
          setGcp_ai_data(
            data.map((col) => ({
              Gcp_ai_data: col["gcp_ai_data"],
              date: col["time"].substr(0, 5),
            }))
          );
        })
        .catch(() => {});
    };

    setInterval(refresh, 2000);
  }, []);

  const map = new Map();

  Aws_ai_data.forEach((item) => map.set(item.date, item));
  Azure_ai_data.forEach((item) =>
    map.set(item.date, { ...map.get(item.date), ...item })
  );
  Gcp_ai_data.forEach((item) =>
    map.set(item.date, { ...map.get(item.date), ...item })
  );

  const mergedData = Array.from(map.values());

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "33%", margin: "10px" }}>
          <Typography sx={{ ml: "10px", fontWeight: 600 }}>
            AWS
          </Typography>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "230px",
              boxshadow: "100px",
              margin: "10px",
              borderRadius: "20px",
            }}
          >
            <LineGraph
              data={Aws_ai_data}
              name="date"
              stroke={{ Aws_ai_data: "#3855B3" }}
            />
          </Card>
        </Box>
        <Box sx={{ width: "33%", margin: "10px" }}>
          <Typography sx={{ ml: "10px", fontWeight: 600 }}>
            Azure
          </Typography>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "230px",
              boxshadow: "100px",
              margin: "10px",
              borderRadius: "20px",
            }}
          >
            <LineGraph
              data={Azure_ai_data}
              name="date"
              stroke={{ Azure_ai_data: "#3855B3" }}
            />
          </Card>
        </Box>
        <Box sx={{ width: "33%", margin: "10px" }}>
          <Typography sx={{ ml: "10px", fontWeight: 600 }}>GCP</Typography>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "230px",
              boxshadow: "100px",
              margin: "10px",
              borderRadius: "20px",
            }}
          >
            <LineGraph
              data={Gcp_ai_data}
              name="date"
              stroke={{ Gcp_ai_data: "#3855B3" }}
            />
          </Card>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "500px", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>
          클라우드 비교
        </Typography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <AILineGraph
            data={mergedData}
            name="date"
            domain={[0, 200]}
            stroke={{
              Aws_ai_data: "#FF9900",
              Azure_ai_data: "#38C0F0",
              Gcp_ai_data: "#EA4335",
            }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default AwsPage;
