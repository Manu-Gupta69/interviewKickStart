import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Stack,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

const ImageForm: React.FC = () => {
  return (
    <Box sx={{ padding: '30px' }}> {/* Removed maxWidth and margin */}
      {/* Title and Icon */}
      <Box display="flex" alignItems="center" gap={1} mb={3} ml={-5}>
        <PersonIcon fontSize="large" />
        <Typography variant="h6" fontWeight="bold">
          Instructor Details
        </Typography>
      </Box>

      {/* Form Fields */}
      <Stack direction="row" spacing={3} flexWrap="wrap">
        {/* Left Column */}
        <Box sx={{ flex: 1, minWidth: '300px' }}>
          <Box mb={3}>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              Instructor Name <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type the instructor name"
              variant="outlined"
              InputProps={{
                sx: {
                  backgroundColor: '#f2f4f8',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>
          <Box mb={3}>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              Instructor Role <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type the instructor role"
              variant="outlined"
              InputProps={{
                sx: {
                  backgroundColor: '#f2f4f8',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>
          <Box mb={3}>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              Instructor Company <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type the instructor company"
              variant="outlined"
              InputProps={{
                sx: {
                  backgroundColor: '#f2f4f8',
                  borderRadius: '10px',
                },
              }}
            />
          </Box>
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap : 6}}>
          {/* Instructor Image Upload */}
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              Instructor Image
            </Typography>
            <label
              style={{
                borderRadius: '10px',
                border: '1px dashed #d9dbdc',
                background: '#f2f4f8',
                width: '135px',
                height: '135px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <input type="file" accept="image/*" style={{ display: 'none' }} />
              <AddIcon sx={{ fontSize: 40, color: '#636973' }} />
            </label>
          </Box>

          {/* Topics Field */}
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              Topics <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Type the topics"
              variant="outlined"
              InputProps={{
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

export default ImageForm;
