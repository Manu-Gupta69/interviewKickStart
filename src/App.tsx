import React, { useState } from "react";
import "./App.css";
import WebinarCardGrid from "./Presentation/Webinar/WebinarCardGrid";
import WebinarNav from "./Presentation/Webinar/WebinarNavBar";
import WebinarSearch from "./Presentation/Webinar/WebinarSearch";
import { Box } from "@mui/material";
import DialogBox from "./Presentation/Common/DialogBox";
import useWebinar from "./Presentation/Webinar/useWebinar";
import CustomForm from "./Presentation/Forms/CustomForm";
import useFilter from "./Common/Hooks/useFilter";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    webinars,
    createWebinars,
    deleteWebinarById,
    selectedWebinar,
    getWebinarById,
  } = useWebinar();

  const { filteredData , setExpression  } = useFilter(webinars);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const webinarCardUpdateHandler = (id: number) => {
    toggleModal();
    getWebinarById(id);
  };


    

  return (
    <Box sx={{ padding: { sx: "12px", md: "30px" } }}>
      <WebinarNav toggleModal={setIsModalOpen} />
      <WebinarSearch setExpression={setExpression} />
      <WebinarCardGrid
        webinars={filteredData.length ? filteredData : webinars}
        deleteHandler={deleteWebinarById}
        updateHandler={webinarCardUpdateHandler}
      />
      <DialogBox toggleModal={setIsModalOpen} isModalOpen={isModalOpen}>
        <CustomForm
          initialFormValues={selectedWebinar}
          createWebinars={createWebinars}
          toggleModal={() => toggleModal()}
        />
      </DialogBox>
    </Box>
  );
}

export default App;
