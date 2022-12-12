import { Box, Card, Typography } from "@mui/material";
import TotalLineGraph from "../Components/TotalLineGraph";

import { useState, useEffect } from "react";
import axios from "../utils/axios";

const CloudPage = () => {
  const [Aws_Data_read, setAwsData_read] = useState([
    { Aws_Data_read: 0, date: "" },
  ]);
  const [Azure_Data_read, setAzure_Data_read] = useState([
    { Azure_Data_read: 0, date: "" },
  ]);
  const [Gcp_Data_read, setGcp_Data_read] = useState([
    { Gcp_Data_read: 0, date: "" },
  ]);
  const [Ncp_Data_read, setNcp_Data_read] = useState([
    { Ncp_Data_read: 0, date: "" },
  ]);

  useEffect(() => {
    const refresh = () => {
      axios.get("/aws_data/Data").then((res) => {
        const data = res.data;
        if (data === undefined) return;

        setAwsData_read(
          data.map((col) => ({
            Aws_Data_read: col["data_read"],
            date: col["time"].substr(0, 5),
          }))
        );
      });

      axios.get("/azure_data/Data").then((res) => {
        const data = res.data;
        if (data === undefined) return;

        setAzure_Data_read(
          data.map((col) => ({
            Azure_Data_read: col["data_read"],
            date: col["time"].substr(0, 5),
          }))
        );
      });

      axios.get("/gcp_data/Data").then((res) => {
        const data = res.data;
        if (data === undefined) return;

        setGcp_Data_read(
          data.map((col) => ({
            Gcp_Data_read: col["data_read"],
            date: col["time"].substr(0, 5),
          }))
        );
      });

      axios.get("/ncp_data/Data").then((res) => {
        const data = res.data;
        if (data === undefined) return;

        setNcp_Data_read(
          data.map((col) => ({
            Ncp_Data_read: col["data_read"],
            date: col["time"].substr(0, 5),
          }))
        );
      });
    };

    setInterval(refresh, 2000);
  }, []);

  const map = new Map();

  Aws_Data_read.forEach((item) => map.set(item.date, item));
  Azure_Data_read.forEach((item) =>
    map.set(item.date, { ...map.get(item.date), ...item })
  );
  Gcp_Data_read.forEach((item) =>
    map.set(item.date, { ...map.get(item.date), ...item })
  );
  Ncp_Data_read.forEach((item) =>
    map.set(item.date, { ...map.get(item.date), ...item })
  );

  const mergedData = Array.from(map.values());

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "100%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>
          클라우드 처리량 비교
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
          <TotalLineGraph
            data={mergedData}
            name="date"
            domain={[1000000, 2000000]}
            stroke={{
              Aws_Data_read: "#FF9900",
              Azure_Data_read: "#38C0F0",
              Gcp_Data_read: "#EA4335",
              Ncp_Data_read: "#00E031",
            }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default CloudPage;
