import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import CustomDialog from "../dialogBox";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Torrents = ({ activeMovie }) => {
  const windowWidth = window.innerWidth;
  const [dialogOpen, setDialogOpen] = useState(false);
  const primaryWidth = windowWidth / 30;

  const handleSeedr = async (torrentUrl) => {
    try {
      await navigator.clipboard.writeText(torrentUrl);
      handleDialogOpen();
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const createMagnetURL = (torrent) => {
    const trackers = [
      "udp://open.demonii.com:1337/announce",
      "udp://tracker.openbittorrent.com:80",
      "udp://tracker.coppersurfer.tk:6969",
      "udp://glotorrents.pw:6969/announce",
      "udp://tracker.opentrackr.org:1337/announce",
      "udp://torrent.gresille.org:80/announce",
      "udp://p4p.arenabg.com:1337",
      "udp://tracker.leechers-paradise.org:6969",
    ];

    const magnetURL = `magnet:?xt=urn:btih:${torrent.hash}&dn=${encodeURIComponent(torrent.url)}&${trackers
      .map((tr) => `tr=${encodeURIComponent(tr)}`)
      .join("&")}`;

    return magnetURL;
  };

  const handleMagnet = async (torrent) => {
    const magnetUrl = createMagnetURL(torrent);
    // console.log(magnetUrl);
    window.open(magnetUrl);
  };

  return (
    <Box mb={1} ml={5}>
      <CustomDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        title="Seedr Instructions"
        message="Log into Seedr & Simply press the 'Paste link URL here' field."
        actions={
          <>
            <Button onClick={handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                window.open("https://www.seedr.cc", "_blank");
                handleDialogClose();
              }}
              color="primary"
              autoFocus
            >
              OK
            </Button>
          </>
        }
      />
      <Typography
        variant="h6"
        sx={{ color: "white", opacity: "0.25", fontSize: "1rem" }}
      >
        Torrents
      </Typography>
      <Grid
        container
        xs={12}
        mb={1}
        mt={1}
        sx={{ color: "white", opacity: 0.5 }}
      >
        <Grid xs={4}>
          <span class="font-small">Quality</span>
        </Grid>
        <Grid xs={3}>
          {" "}
          <span class="font-small">Size</span>
        </Grid>
        <Grid xs={3}>
          {" "}
          <span class="font-small">Links</span>
        </Grid>
      </Grid>
      <div
        class="w-100 mb-3"
        style={{
          height: 0.5,
          backgroundColor: "grey",
          width: windowWidth * 0.5,
          opacity: "0.4",
        }}
      ></div>
      {activeMovie?.torrents.map((torrent) => (
        <Grid
          container
          xs={12}
          mb={1}
          key={torrent.id}
          sx={{ alignItems: "center" }}
        >
          <Grid xs={4} mb={1} ml={0}>
            <Typography
              sx={{ color: "white", textAlign: "left" }}
              style={{ fontSize: primaryWidth * 0.25 }}
            >
              {torrent?.quality}
            </Typography>
            <Typography
              sx={{ color: "white", textAlign: "left" }}
              style={{ fontSize: primaryWidth * 0.25 }}
            >
              {torrent?.type} {torrent?.video_codec}
            </Typography>
            <Typography
              fontSize="small"
              sx={{ color: "grey", textAlign: "left" }}
              style={{ fontSize: primaryWidth * 0.25 }}
            >
              {torrent?.audio_channels} audio Channels
            </Typography>
            <Typography
              fontSize="small"
              sx={{ color: "grey", textAlign: "left" }}
              style={{ fontSize: primaryWidth * 0.25 }}
            >
              {torrent?.bit_depth} bit depth
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography
              sx={{ color: "grey", textAlign: "left" }}
              style={{ fontSize: primaryWidth * 0.3 }}
            >
              {torrent?.size}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ fontSize: "0.7rem" }}>
            <Grid container xs={12} gap={2}>
              <Grid xs={4}>
                <a href={torrent?.url}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor:
                        torrent?.type === "bluray" ? "green" : "white",
                      color: torrent?.type === "bluray" ? "white" : "black",
                      fontSize: "0.5rem",
                    }}
                  >
                    Download
                  </Button>
                </a>
              </Grid>
              <Grid xs={4}>
                <Button
                  onClick={() => {
                    handleMagnet(torrent);
                  }}
                  variant="contained"
                  sx={{
                    backgroundColor:
                      torrent?.type === "bluray" ? "green" : "white",
                    color: torrent?.type === "bluray" ? "white" : "black",
                    fontSize: "0.5rem",
                  }}
                >
                  Magnet
                </Button>
              </Grid>
              <Grid xs={4}>
                {/* <Button
                  variant="contained"
                  onClick={() => handleSeedr(torrent?.url)}
                  sx={{
                    backgroundColor:
                      torrent?.type === "bluray" ? "green" : "white",
                    color: torrent?.type === "bluray" ? "white" : "black",
                    fontSize: "0.5rem",
                  }}
                >
                  Seedr
                </Button> */}
              </Grid>
            </Grid>
          </Grid>
          <div
            style={{
              marginBottom: "5rem",
            }}
          ></div>
        </Grid>
      ))}
    </Box>
  );
};

export default Torrents;
