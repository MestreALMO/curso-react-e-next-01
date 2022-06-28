import { Typography, Box, Card } from "@mui/material";

export const InfoCard = ({ title, text }) => {
  return (
    <>
      <Card sx={{ maxWidth: 400, border: "solid 1px #000" }}>
        <img
          src={require("../../images/thumbnails/styled-components.png")}
          style={{ maxWidth: 400 }}
        />
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography>{text}</Typography>
        </Box>
      </Card>
    </>
  );
};
