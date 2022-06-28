import { Typography, Box } from "@mui/material";
import { InfoCard } from "./components/InfoCard";

function App() {
  return (
    <>
      <Typography variant="h1">DevALMO, YouTube Channel</Typography>

      <Box sx={{ display: "flex" }}>
        <InfoCard
          title="Lorem Ipsum"
          text="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            consequatur provident fugiat quo assumenda facilis voluptatem itaque
            minima, nostrum sint, perspiciatis id ipsam ad maxime voluptatum
            culpa sed distinctio saepe!"
        />
      </Box>
    </>
  );
}

export default App;
