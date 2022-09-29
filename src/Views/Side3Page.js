import { Box, Card, Typography } from "@mui/material";

const Side3Page = () => {
  return (
    <Box sx={{ width: "100%", margin: "10px", height: "750px" }}>
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
      >
      </Card>
    </Box>
  );
};

export default Side3Page;
