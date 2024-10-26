import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DataTimeInputForm from './DateTimeInputForm';
import ImageForm from './ImageForm';
import ModalActions from './ModalBottom';

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const style = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  width: '90vw', // Set width to a percentage of viewport width
  maxWidth: '1000px', // Set a max width to prevent overly large modals
  maxHeight: '90vh', // Set max height to ensure it fits within the viewport
  boxShadow: 24,
  padding: '24px', // Increased padding for better spacing
  overflowY: 'auto', // Enable vertical scrolling if content overflows
};

const MyModal = () => {
  const open = true;
  const handleClose = () => {};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} // Center modal
    >
      <Box sx={modalOverlayStyle}>
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 12px' }}>
            <Typography variant="h6" component="h2">
              Modal Title
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ color: '#636973' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          
          {/* Ensure forms are consistently styled */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ImageForm /> {/* Maintain spacing */}
            <DataTimeInputForm />
          </Box>
          <ModalActions />
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;
