import React from "react";
import { Grid, Box, Button } from "@mui/material";

const windowWidth = window.innerWidth;

const FilteringTV = ({ handleSearch }) => {
  return (
    <Box>
      <Grid container xs={12} mt={3} mb={1} mr={0}>
        <Grid xs={12}>
          <input
            onChange={(event) => handleSearch(event.target.value)}
            type="text"
            placeholder="Let's Start Searching.."
            style={{
              width: "95%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "1px solid white",
              borderRadius: "50px",
              padding: windowWidth * 0.008,
              outline: "none",
            }}
            className="font-small"
          />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={2}
        mb={5}
        justifyContent="center"
        alignItems="center"
      ></Grid>
    </Box>
  );
};

export default FilteringTV;
