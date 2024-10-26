import React from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function WebinarSearch() {
  return (
    <Box
      component="form"
      role="search"
      sx={{
        display: "flex",
        width: "100%",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems : "center",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        margin : "24px 0px"
      }}
    >
      {/* Search Input */}
      <TextField
        id="webinarSearch"
        placeholder="Search for webinar"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#636973" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: 1,
          maxWidth: { xs: "30%", sm: "400px"  },
          backgroundColor: "#fff",
        }}
      />

      <Button
        variant="outlined"
        startIcon={<span>Topic</span>}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          borderRadius: "8px",
          borderColor: "#e3e7ec",
          color: "#2e333b",
          backgroundColor: "#fff",
          lineHeight: 1.5,
          padding: "6px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "space-between",
          minWidth: "225px",
          height: "40px",
        }}
      ></Button>
    </Box>
  );
}
