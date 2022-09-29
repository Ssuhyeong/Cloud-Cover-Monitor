import { Box, Card, Typography } from "@mui/material";

const Side1Page = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "50%", margin: "10px", height: "750px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>샘플로</Typography>
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
        ></Card>
      </Box>
      <Box sx={{ width: "50%", margin: "10px", height: "750px" }}>
        <Typography sx={{ ml: "10px", fontWeight: 600 }}>만들었어요</Typography>
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
        ></Card>
      </Box>
    </Box>
  );
};

export default Side1Page;
