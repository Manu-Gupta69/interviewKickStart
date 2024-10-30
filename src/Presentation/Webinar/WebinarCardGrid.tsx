import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import WebinarCard from "../Common/WebinarCard";
import { Webinar } from "../../Domain/Model/Webinar";
import { CONST } from "../../Constants";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";

interface WebinarCardGridProps {
  webinars: Webinar[] | WebinarAPIEntity[];
  deleteHandler: (id: string) => void;
  updateHandler: (id: number) => void;
  showNoResultFallBack: boolean;
}

const WebinarCardGrid: React.FC<WebinarCardGridProps> = ({
  webinars,
  deleteHandler,
  updateHandler,
  showNoResultFallBack,
}) => {
  return (
    <Box mt={2}>
      {showNoResultFallBack ? (
         <Box sx={{ textAlign: 'center', mt: 4 }}>
         <Typography variant="h6" color="text.secondary">
           No results found for your filters.
         </Typography>
         <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
           Showing all webinars instead. Please adjust your filters if needed.
         </Typography>
       </Box>
      ) : null}
      <Grid container spacing={2}>
        {webinars.map((webinar, index) => {
          const id = (webinar as Webinar).id;
          return (
            <Grid item xs={12} md={4} key={id}>
              <WebinarCard
                webinar={{
                  ...webinar,
                  headerColor: CONST.availableColor[Math.floor(index % 3)],
                }}
                onDelete={() => deleteHandler(`${id}`)}
                onEdit={() => updateHandler(id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WebinarCardGrid;
