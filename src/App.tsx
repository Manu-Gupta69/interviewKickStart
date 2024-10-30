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
    setSelectedWebinar,
    updateWebinarById
  } = useWebinar();

  const { filteredData , setExpression , expression } = useFilter(webinars);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if(selectedWebinar) setSelectedWebinar(undefined);
  };

  const webinarCardUpdateHandler = (id: number) => {
    toggleModal();
    getWebinarById(id);
  };

  const expressionArr = Object.keys(expression);

  return (
    <Box sx={{ padding: { sx: "12px", md: "30px" } }}>
      <WebinarNav toggleModal={setIsModalOpen} />
      <WebinarSearch setExpression={setExpression} />
      <WebinarCardGrid
        showNoResultFallBack={Boolean(expressionArr.length && !filteredData.length)}
        webinars={filteredData.length ? filteredData : webinars}
        deleteHandler={deleteWebinarById}
        updateHandler={webinarCardUpdateHandler}
      />
      <DialogBox modalTitle={selectedWebinar ? "Update Webinar" : "Create Webinar"} isModalOpen={isModalOpen} closeHandler={() => toggleModal()}>
        <CustomForm
          initialFormValues={selectedWebinar}
          createWebinars={createWebinars}
          toggleModal={() => toggleModal()}
          updateWebinar={updateWebinarById}
        />
      </DialogBox>
    </Box>
  );
}

export default App;
