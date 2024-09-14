import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const windowWidth = window.innerWidth;

const Filtering = ({
  options,
  selectedOptions,
  handleSearch,
  handleSelectionChange,
  handleReload,
}) => {
  // Local state for managing the search input with a delay
  const [searchInput, setSearchInput] = useState("");

  // Delay duration (in milliseconds)
  const debounceDelay = 500;

  // Handle search with debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch(searchInput); // Call the search function after the delay
    }, debounceDelay);

    // Cleanup the timeout if the component is unmounted or the searchInput changes
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]); // Effect runs whenever searchInput changes

  // Determine if all selected options are empty
  const allOptionsEmpty = Object.values(selectedOptions).every(
    (value) => value === "" || value === null
  );

  return (
    <Box>
      <Grid container xs={12} mt={3} mb={1} mr={0}>
        <Grid xs={12}>
          <input
            onChange={(event) => setSearchInput(event.target.value)} // Update local search state
            type="text"
            placeholder="Let's Start Searching.."
            style={{
              width: "95.5%",
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
      >
        {Object.keys(options).map((key, index) => (
          <Grid item xs={4} key={index}>
            <FormControl
              variant="filled"
              sx={{
                backgroundColor: "grey",
                borderRadius: "10px",
                fontSize: "0.75rem",
              }}
              fullWidth
            >
              <InputLabel
                id={`${key}-label`}
                sx={{
                  fontSize: "0.75rem",
                  "&.Mui-focused": {
                    color: "white", // Change the color to white when the label is focused
                  },
                }}
              >
                {options[key].title}
              </InputLabel>
              <Select
                sx={{
                  color: "white",
                  backgroundColor: "rgba(230, 230, 230, 0.3)",
                  fontSize: "0.75rem",
                }}
                labelId={`${key}-label`}
                id={key}
                value={selectedOptions[key] || ""}
                onChange={(event) => handleSelectionChange(event, key)}
              >
                {options[key].values.map((optionValue, optionIndex) => (
                  <MenuItem
                    value={optionValue}
                    key={optionIndex}
                    sx={{ fontSize: "0.75rem" }}
                  >
                    {optionValue}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}

        <Grid>
          <Button
            variant="contained"
            color="success"
            onClick={handleReload}
            sx={{
              marginTop: 1,
              color: "white",
              fontSize: "0.75rem",
            }}
            disabled={allOptionsEmpty}
          >
            Clear All Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filtering;
