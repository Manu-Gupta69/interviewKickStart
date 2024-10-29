import React from "react";
import { Box, Typography, TextField, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";

interface FieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

interface ImageFormProps {
  values: any;
  errors: any;
  touched: any;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formConfig: {
    instructorDetails: FieldConfig[];
    topicsField: FieldConfig[];
    imageField: FieldConfig[];
  };
  imagePreview: any;
}

const ImageForm: React.FC<ImageFormProps> = ({
  values,
  errors,
  touched,
  handleChange,
  handleFileChange,
  formConfig,
  imagePreview,
}) => {
  return (
    <Box sx={{ padding: "30px" }}>
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
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          {formConfig.instructorDetails.map((field) => (
            <Box key={field.name} mb={3}>
              <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
                {field.label}{" "}
                {field.required && <span style={{ color: "red" }}>*</span>}
              </Typography>
              <TextField
                fullWidth
                name={field.name}
                placeholder={field.placeholder}
                variant="outlined"
                value={values[field.name]}
                onChange={handleChange}
                error={touched[field.name] && Boolean(errors[field.name])}
                helperText={touched[field.name] && errors[field.name]}
                InputProps={{
                  sx: {
                    backgroundColor: "#f2f4f8",
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {/* Instructor Image Upload */}
          {imagePreview ? (
            <Box sx={{ my: 2 }}>
              <img
                src={imagePreview}
                alt="Instructor"
                style={{
                  maxWidth: "25%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </Box>
          ) : (
            <Box>
              <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
                {formConfig.imageField[0].label}
              </Typography>
              <label
                style={{
                  borderRadius: "10px",
                  border: "1px dashed #d9dbdc",
                  background: "#f2f4f8",
                  width: "135px",
                  height: "135px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="file"
                  name={formConfig.imageField[0].name}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <AddIcon sx={{ fontSize: 40, color: "#636973" }} />
              </label>
              {touched[formConfig.imageField[0].name] &&
                errors[formConfig.imageField[0].name] && (
                  <Typography variant="caption" color="error">
                    {errors[formConfig.imageField[0].name]}
                  </Typography>
                )}
            </Box>
          )}

          {/* Topics Field */}
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              {formConfig.topicsField[0].label}{" "}
              <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              name={formConfig.topicsField[0].name}
              placeholder={formConfig.topicsField[0].placeholder}
              variant="outlined"
              value={values[formConfig.topicsField[0].name]}
              onChange={handleChange}
              error={
                touched[formConfig.topicsField[0].name] &&
                Boolean(errors[formConfig.topicsField[0].name])
              }
              helperText={
                touched[formConfig.topicsField[0].name] &&
                errors[formConfig.topicsField[0].name]
              }
              InputProps={{
                sx: {
                  backgroundColor: "#f2f4f8",
                  borderRadius: "10px",
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
