import React, { ChangeEvent } from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { DatePicker, TimePicker } from "@mui/x-date-pickers"; // Ensure proper imports
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface FieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  icon?: React.ReactNode;
}

interface DataTimeInputFormProps {
  values: { [key: string]: any };
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | { name: string; value: any }
  ) => void;
  formConfig: FieldConfig[];
}

const DataTimeInputForm: React.FC<DataTimeInputFormProps> = ({
  values,
  errors,
  touched,
  handleChange,
  formConfig,
}) => {
  return (
    <Box sx={{ width: "90%", padding: "20px" }}>
      <Box display="flex" alignItems="center" gap={1} mb={2} ml={-3}>
        <VideoCameraFrontIcon fontSize="large" />
        <Typography variant="h6" fontWeight="bold">
          Webinar Details
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5 }}>
            {formConfig[0].label}{" "}
            {formConfig[0].required && <span style={{ color: "red" }}>*</span>}
          </Typography>
          <TextField
            fullWidth
            name={formConfig[0].name}
            placeholder={formConfig[0].placeholder}
            variant="outlined"
            value={values[formConfig[0].name]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            error={
              touched[formConfig[0].name] && Boolean(errors[formConfig[0].name])
            }
            helperText={
              touched[formConfig[0].name] && errors[formConfig[0].name]
            }
            InputProps={{
              sx: {
                backgroundColor: "#f2f4f8",
                borderRadius: "10px",
              },
            }}
          />
        </Box>

        {/* Date and Time Fields */}
        <Box display="flex" gap={2} flexWrap="wrap">
          {formConfig.slice(1).map((field) => (
            <Box key={field.name} flex="1">
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", mb: 0.5 }}
              >
                {field.label}{" "}
                {field.required && <span style={{ color: "red" }}>*</span>}
              </Typography>
              {field.type === "date" ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={dayjs(new Date(values.startDate))}
                    label="Start Date"
                    onChange={(value) =>
                      handleChange({ name: field.name, value })
                    }
                  />
                </LocalizationProvider>
              ) : field.type === "time" ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    defaultValue={dayjs(values[field.name])}
                    label={field.name}
                    onChange={(value) =>
                      handleChange({ name: field.name, value })
                    }
                  />
                </LocalizationProvider>
              ) : null}
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default DataTimeInputForm;
