import { Box, Card, Typography } from "@mui/material";

const Side2Page = () => {
  return (
    <Box>
      <Box sx={{ width: "100%", margin: "10px", height: "300px" }}>
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
      <Typography sx={{ ml: "20px", fontWeight: 600, mt: "50px" }}>
        만들었어요
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          margin: "10px",
          height: "300px",
        }}
      >
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

export default Side2Page;
