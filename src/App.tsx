import React from "react";
import "./App.css";
import WebinarCardGrid from "./Presentation/Webinar/WebinarCardGrid";
import WebinarNav from "./Presentation/Webinar/WebinarNavBar";
import WebinarSearch from "./Presentation/Webinar/WebinarSearch";
import { Box } from "@mui/material";
import DialogBox from "./Presentation/Common/DialogBox";

function App() {
  return (
    <Box sx={{ padding: { sx: "12px", md: "30px" } }}>
      <WebinarNav />
      <WebinarSearch />
      <WebinarCardGrid />
      <DialogBox />
    </Box>
  );
}

export default App;
