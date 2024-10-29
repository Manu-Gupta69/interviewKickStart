import React from "react";
import { Box, Grid } from "@mui/material";
import WebinarCard from "../Common/WebinarCard";
import { Webinar } from "../../Domain/Model/Webinar";
import { CONST } from "../../Constants";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";

interface WebinarCardGridProps {
  webinars: Webinar[] | WebinarAPIEntity[];
  deleteHandler : (id: string) => void;
  updateHandler : (id: number) => void;
}

const WebinarCardGrid: React.FC<WebinarCardGridProps> = ({ webinars, deleteHandler , updateHandler }) => {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {webinars.map((webinar,index) => {
          const id = (webinar as Webinar).id;

          return id >= 0? (
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
          ) : null;
        })}
      </Grid>
    </Box>
  );
};

export default WebinarCardGrid;
