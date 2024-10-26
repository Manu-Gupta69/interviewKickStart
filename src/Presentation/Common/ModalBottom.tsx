import React from 'react';
import { Box, Button } from '@mui/material';

const ModalActions: React.FC = () => {
  return (
    <Box
      sx={{
        background: '#fff',
        display: 'flex',
        width: '100%',
        gap: '37px',
        textAlign: 'center',
        flexWrap: 'wrap',
        padding: '20px 32px',
        font: '600 16px Inter, sans-serif',
      }}
    >
      <Button
        variant="contained"
        sx={{
          borderRadius: '10px',
          background: '#0e51f1',
          minHeight: '44px',
          color: '#fff',
          padding: '13px 24px',
          '&:hover': {
            background: '#0d45c1', // Optional: Darker shade for hover effect
          },
        }}
        type="button"
      >
        Create webinar
      </Button>

      <Button
        variant="text"
        sx={{
          color: '#0e51f1',
          flexGrow: 1,
          flexBasis: 'auto',
          margin: 'auto 0',
          background: 'none',
          '&:hover': {
            background: 'none', // Optional: To avoid any background change on hover
          },
        }}
        type="button"
      >
        Cancel
      </Button>
    </Box>
  );
};

export default ModalActions;
