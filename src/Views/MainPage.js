import { Box, Card, Typography } from "@mui/material";
import BarGraph from "../Components/BarGraph";
import PieGraph from "../Components/PieGraph";
import MulGraph from "../Components/MulGraph";

const MainPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "33%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>전체 자원</Typography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "200px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <BarGraph />
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          비용
        </Typography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <Typography sx={{ fontSize: "32px" }}>Total $130,000</Typography>
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          뭘 쓰지
        </Typography>
        <Card
          sx={{
            width: "100%",
            height: "150px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        ></Card>
      </Box>
      <Box sx={{ width: "33%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>트래픽</Typography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "350px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <PieGraph />
        </Card>
        <Typography sx={{ ml: "10px", mt: "20px", fontWeight: 600 }}>
          여기는 뭘 하지
        </Typography>
        <Card
          sx={{
            width: "100%",
            height: "155px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        ></Card>
      </Box>
      <Box sx={{ width: "33%", margin: "10px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>CPU</Typography>
        <Card
          sx={{
            width: "100%",
            height: "150px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        ></Card>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>Cloud 비교</Typography>
        <Card
          sx={{
            width: "100%",
            height: "365px",
            boxshadow: "100px",
            margin: "10px",
            borderRadius: "20px",
          }}
        >
          <MulGraph />
        </Card>
      </Box>
    </Box>
  );
};

export default MainPage;
