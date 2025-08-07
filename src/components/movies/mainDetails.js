import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const primaryWidth = windowWidth / 30;

const MainDetails = ({ activeMovie }) => {
  return (
    <Grid container xs={12} ml={5} mb={1}>
      <Grid xs={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            minWidth: "100px",
          }}
        >
          <Typography
            className="opacity-75"
            sx={{ color: "white", textAlign: "left" }}
          >
            IMDB
          </Typography>
          <Typography
            sx={{
              color: "orange",
              textAlign: "left",
              fontSize: "larger",
              fontWeight: "bold",
            }}
            style={{ fontSize: primaryWidth * 0.4 }}
          >
            {activeMovie?.rating}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            minWidth: "100px",
          }}
        >
          <Typography
            className="opacity-75"
            sx={{ color: "white", textAlign: "left" }}
          >
            Language
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "left",
              fontSize: "larger",
              fontWeight: "bold",
            }}
            style={{ fontSize: primaryWidth * 0.4 }}
          >
            {activeMovie?.language}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            minWidth: "100px",
          }}
        >
          <Typography
            className="opacity-75"
            sx={{ color: "white", textAlign: "left" }}
          >
            Genres
          </Typography>
          <div
            class="mt-1 w-75"
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "white",
              fontSize: primaryWidth * 0.4,
            }}
          >
            {activeMovie?.genres?.length >= 0 &&
              activeMovie?.genres?.map((genre, index) => (
                <span key={index} style={{ fontSize: primaryWidth * 0.4 }}>
                  {genre}
                  <span class="opacity-0">--</span>{" "}
                </span>
              ))}
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainDetails;
