import React from "react";
import { Box, Grid } from "@mui/material";
import WebinarCard from "../Common/WebinarCard";
import useWebinar from "./useWebinar";
import { Webinar } from "../../Domain/Model/Webinar";
import { CONST } from "../../Constants";

const WebinarCardGrid: React.FC = () => {
  const { webinars, createWebinars } = useWebinar();

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {webinars.map((webinar) => {
          const id = (webinar as Webinar).id;
          const randomNumber = Math.floor(Math.random() * 3);
          return id ? (
            <Grid item xs={12} md={4} key={id as string}>
              <WebinarCard
                webinar={{
                  ...webinar,
                  headerColor: CONST.availableColor[randomNumber],
                }}
                onDelete={() => {}}
                onEdit={() => {}}
              />
            </Grid>
          ) : null;
        })}
      </Grid>
    </Box>
  );
};

export default WebinarCardGrid;
