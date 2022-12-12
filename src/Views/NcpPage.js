import { Box, Card, Typography } from "@mui/material";
import LineGraph from "../Components/LineGraph";
import BarGraph from "../Components/BarGraph";
import B_BarGraph from "../Components/B_BarGraph";

import { useState, useEffect } from "react";

import axios from "../utils/axios";

const NcpPage = () => {
  const [Lat_avg, setLat_avg] = useState([{ Lat_avg: 0, date: "" }]);
  const [Lat_max, setLat_max] = useState([{ Lat_max: 0, date: "" }]);
  const [Lat_stdev, setLat_stdev] = useState([{ Lat_stdev: 0, date: "" }]);
  const [Req_avg, setReq_avg] = useState([{ Req_avg: 0, date: "" }]);
  const [Req_max, setReq_max] = useState([{ Req_max: 0, date: "" }]);
  const [Req_stdev, setReq_stdev] = useState([{ Req_stdev: 0, date: "" }]);
  const [Data_read, setData_read] = useState([{ Data_read: 0, date: "" }]);
  const [Tot_requests, setTot_requests] = useState([
    { Tot_requests: 0, date: "" },
  ]);

  useEffect(() => {
    const refresh = () => {
      axios
        .get("/ncp_data/Data")
        .then((res) => {
          const data = res.data;
          if (data === undefined) return;

          setLat_avg(
            data.map((col) => ({
              Lat_avg: col["lat_avg"],
              date: col["time"].substr(0, 5),
            }))
          );
          setLat_max(
            data.map((col) => ({
              Lat_max: col["lat_max"],
              date: col["time"].substr(0, 5),
            }))
          );
          setLat_stdev(
            data.map((col) => ({
              Lat_stdev: col["lat_stdev"],
              date: col["time"].substr(0, 5),
            }))
          );
          setReq_avg(
            data.map((col) => ({
              Req_avg: col["req_avg"],
              date: col["time"].substr(0, 5),
            }))
          );
          setReq_max(
            data.map((col) => ({
              Req_max: col["req_max"],
              date: col["time"].substr(0, 5),
            }))
          );
          setReq_stdev(
            data.map((col) => ({
              Req_stdev: col["req_stdev"],
              date: col["time"].substr(0, 5),
            }))
          );
          setData_read(
            data.map((col) => ({
              Data_read: col["data_read"],
              date: col["time"].substr(0, 5),
            }))
          );
          setTot_requests(
            data.map((col) => ({
              Tot_requests: col["tot_requests"],
              date: col["time"].substr(0, 5),
            }))
          );
        })
        .catch(() => {});
    };

    setInterval(refresh, 2000);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "33%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>
          지연시간 평균
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
            data={Lat_avg}
            name="date"
            stroke={{ Lat_avg: "#3855B3" }}
          />
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          지연시간 최대값
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
            data={Lat_max}
            name="date"
            stroke={{ Lat_max: "#3855B3" }}
          />
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          지연시간 표준편차
        </Typography>
        <Card
          sx={{
            width: "100%",
            height: "230px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <LineGraph
            data={Lat_stdev}
            name="date"
            stroke={{ Lat_stdev: "#3855B3" }}
          />
        </Card>
      </Box>
      <Box sx={{ width: "33%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>
          요청시간 평균
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
            data={Req_avg}
            name="date"
            stroke={{ Req_avg: "#3855B3" }}
          />
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          요청시간 최대값
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
            data={Req_max}
            name="date"
            stroke={{ Req_max: "#3855B3" }}
          />
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          요청시간 표준편차
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
            data={Req_stdev}
            name="date"
            stroke={{ Req_stdev: "#3855B3" }}
          />
        </Card>
      </Box>
      <Box sx={{ width: "33%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>처리량</Typography>
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
          {/* <Typography sx={{ fontSize: "32px" }}>45151700</Typography> */}
          <BarGraph
            data={Data_read}
            name="date"
            fill={{ Data_read: "#3855B3" }}
          />
        </Card>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>총 요청 수</Typography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "525px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <B_BarGraph
            data={Tot_requests}
            name="date"
            fill={{ Tot_requests: "#3855B3" }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default NcpPage;
