import React, { useMemo } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { WebinarAPIEntity } from "../../Data/DataSource/API/Entity/WebinarAPIEntity";
import { base64ToImageFile, formatDate } from "../../Utils";
import dayjs from "dayjs";

interface Session extends WebinarAPIEntity {
  headerColor: string;
}

interface IWebinarCard {
  webinar: Session;
  onDelete: () => void;
  onEdit: () => void;
}

const WebinarCard: React.FC<IWebinarCard> = ({ webinar, onDelete, onEdit }) => {
  const modifiedDate = formatDate(webinar.startDate);
  const instructorImgSrc = URL.createObjectURL(
    base64ToImageFile(webinar.instructorImage, "image.png")
  );

 
  return (
    <Box
      sx={{
        borderRadius: 5.6,
        border: "1px solid #E3E7EC",
        backgroundColor: "#FFF",
        boxShadow: "0px 20px 46px -24px rgba(14, 16, 19, 0.12)",
        p: 3,
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          backgroundColor: webinar.headerColor,
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: "#FFF", mb: 1 }}>
            {webinar.instructorName}
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFF" }}>
            {webinar.instructorRole}
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFF", mt: 1.5 }}>
            {webinar.instructorCompany}
          </Typography>
        </Box>
        <Avatar
          src={instructorImgSrc}
          sx={{
            width: 80,
            height: 80,
            boxShadow: "0px 20px 46px rgba(14, 16, 19, 0.12)",
            objectFit: "contain",
            borderRadius: "25%", // Adjust this for more or less rounding
          }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: webinar.headerColor, fontSize: 14 }}
        >
          {webinar.topic}
        </Typography>
        <Typography variant="h6" sx={{ color: "#0E1013", fontSize: 18, mt: 1 }}>
          {webinar.webinarTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "#2E333B", mt: 1 }}>
          {modifiedDate}
          <span style={{ marginLeft: "1em" }}>
            {dayjs(webinar.startTime).format("h:mm")} -{" "}
            {dayjs(webinar.endTime).format("h:mm A")}
          </span>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", mt: 3, gap: 2 }}>
        <Button
          variant="contained"
          onClick={onDelete}
          sx={{
            backgroundColor: "#F9E8E8",
            color: "#D14040",
            borderRadius: "24px",
            fontSize: 14,
            minHeight: 36,
            width: 90,
            ":hover": { backgroundColor: "#f5c6c6" },
          }}
        >
          Delete
        </Button>
        <Button
          variant="text"
          onClick={onEdit}
          sx={{
            color: "#0E51F1",
            fontSize: 13,
            textAlign: "center",
          }}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default WebinarCard;
