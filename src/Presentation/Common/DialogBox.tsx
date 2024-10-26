import React, { useState } from 'react';
import { Button, Modal, Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px', 
  boxShadow: 24,

};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  backdropFilter: 'blur(5px)',
};

const DialogBox: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={modalOverlayStyle}>
          <Box sx={style}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding : "13px 12px" }}>
              <Typography variant="h6" component="h2">
                Modal Title
              </Typography>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  color: '#636973',
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography sx={{ mt: 2 }}>
              This modal has a background blur effect and a close button in the top right corner.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DialogBox;
