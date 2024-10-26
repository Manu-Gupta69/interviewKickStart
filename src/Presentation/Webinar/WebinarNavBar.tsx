import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

const WebinarNav = () => (
  // <Box
  //   display="flex"
  //   width="100%"
  //   alignItems="center"
  //   gap={{ xs: "10px", md: "28px 925px" }}
  //   fontFamily="Inter, sans-serif"
  //   fontWeight="600"
  //   justifyContent="flex-end"
  //   flexWrap="wrap"
  // >
  //   <Typography
  //     variant="h1"
  //     sx={{
  //       color: "#0e1013",
  //       fontSize: "18px",
  //       lineHeight: 2,
  //       flexGrow: 1,
  //       width: { xs: "auto", md: "74px" },
  //     }}
  //   >
  //     Webinar
  //   </Typography>

  //   <Button
  //     variant="contained"
  //     sx={{
  //       borderRadius: "10px",
  //       backgroundColor: "#0e51f1",
  //       boxShadow: "0 8px 20px -8px #0e51f1",
  //       fontSize: "14px",
  //       color: "#fff",
  //       textAlign: "center",
  //       lineHeight: "normal", 
  //       width: { xs: "auto", md: "150px" }, 
  //       marginRight: {xs : "0px" , md : "50px"},
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center", 
  //       padding: { xs: "8px 16px", md: "14px 16px" }
  //     }}
  //     onClick={() => console.log("Add webinar button clicked")}
  //   >
  //     Add Webinar
  //   </Button>

  //   <Divider
  //     sx={{
  //       backgroundColor: "#E3E7EC",
  //       minWidth: "10px",
  //       height: "0.1px",
  //       flexGrow: 1,
  //       width: { xs: "100%", md: "1231px" },
  //     }}
  //   />
  // </Box>
  <Box
  display="flex"
  width="100%"
  alignItems="center"
  gap={{ xs: 1, md: 3 }}
  fontFamily="Inter, sans-serif"
  fontWeight="600"
  justifyContent="space-between" // Adjusts spacing between items for a responsive look
  flexWrap="wrap"
>
  <Typography
    variant="h1"
    sx={{
      color: "#0e1013",
      fontSize: "18px",
      lineHeight: 1.5,
      flexGrow: 1,
      minWidth: "auto", // Adjusts the minWidth for better responsiveness
      width: { xs: "auto", md: "auto" },
    }}
  >
    Webinar
  </Typography>

  <Button
    variant="contained"
    sx={{
      borderRadius: "10px",
      backgroundColor: "#0e51f1",
      boxShadow: "0 8px 20px -8px #0e51f1",
      fontSize: "14px",
      color: "#fff",
      textAlign: "center",
      lineHeight: "normal", 
      width: { xs: "auto", md: "150px" },
      marginRight: { xs: "0px", md: "2%" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center", 
      padding: { xs: "8px 16px", md: "12px 20px" }
    }}
    onClick={() => console.log("Add webinar button clicked")}
  >
    Add Webinar
  </Button>

  <Divider
    sx={{
      backgroundColor: "#E3E7EC",
      width: "100%",
      height: "1px",
      marginTop: 2,
    }}
  />
</Box>

);

export default WebinarNav;
