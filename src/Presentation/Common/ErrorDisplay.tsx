import React from 'react';
import { Box, Typography } from '@mui/material';

interface IErrorDisplay{
    errorMessages : string []
}

const ErrorDisplay: React.FC<IErrorDisplay> = ({ errorMessages })=> {
  if (!errorMessages.length) return null; 

  return (
    <Box
      sx={{
        backgroundColor: '#f44336',
        color: 'white',
        padding: '16px',
        marginBottom: '16px',
        borderRadius: '4px',
      }}
    >
      <ul>
        {errorMessages.map((msg, index) => (
          <li key={index}>
            <Typography variant="body2">{msg}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ErrorDisplay;
