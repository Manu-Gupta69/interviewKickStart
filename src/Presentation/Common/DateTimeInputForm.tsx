import React from 'react';
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Stack,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const DataTimeInputForm: React.FC = () => {
  return (
    <Box sx={{ width: '90%', padding: '20px' }}> {/* Changed maxWidth to 100% */}
      {/* Title and Icon */}
      <Box display="flex" alignItems="center" gap={1} mb={2} ml={-3}>
        <VideoCameraFrontIcon fontSize="large" />
        <Typography variant="h6" fontWeight="bold">
          Webinar Details
        </Typography>
      </Box>

      {/* Form Fields */}
      <Stack spacing={3}>
        {/* Webinar Title */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
            Webinar Title <span style={{ color: 'red' }}>*</span>
          </Typography>
          <TextField
            fullWidth
            placeholder="Type the webinar title"
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: '#f2f4f8',
                borderRadius: '10px',
              },
            }}
          />
        </Box>

        {/* Date and Time Fields */}
        <Box display="flex" gap={2} flexWrap="wrap">
          {/* Start Date */}
          <Box flex="1">
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Start Date <span style={{ color: 'red' }}>•</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type start date"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> {/* Changed to 'start' for better alignment */}
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: '#f2f4f8',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>

          {/* Start Time */}
          <Box flex="1">
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              Start Time <span style={{ color: 'red' }}>•</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type start time"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> {/* Changed to 'start' for better alignment */}
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: '#f2f4f8',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>

          {/* End Time */}
          <Box flex="1">
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              End Time <span style={{ color: 'red' }}>•</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type end time"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> {/* Changed to 'start' for better alignment */}
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: '#f2f4f8',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default DataTimeInputForm;
