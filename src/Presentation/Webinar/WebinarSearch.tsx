import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { filterData } from "../../Constants";
import { filterExpresssions, FilterObject } from "../../Common/interfaces";

interface IWebinarSearch {
  setExpression: Dispatch<SetStateAction<FilterObject>>;
}

const WebinarSearch: React.FC<IWebinarSearch> = ({ setExpression }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (
    event: SelectChangeEvent<string>,
    key: string,
    operation: string,
    value: string
  ) => {
    setSelectedValue(event?.target?.value);
    setExpression((prev: FilterObject) => {
      const newExpression = { ...prev };

      newExpression[key] = { key, operation, value: event.target.value };

      return newExpression;
    });
  };

  return (
    <Box
      component="form"
      role="search"
      sx={{
        display: "flex",
        width: "100%",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        margin: "24px 0px",
      }}
    >
      {/* Search Input */}
      <TextField
        id="webinarSearch"
        placeholder="Search for webinar"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#636973" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: 1,
          maxWidth: { xs: "30%", sm: "400px" },
          backgroundColor: "#fff",
        }}
      />

      {filterData.map((item) => {
        switch (item.type) {
          case "Button": {
            return (
              <FormControl>
                <InputLabel id="custom-dropdown-label" sx={{ display: "none" }}>
                  Select
                </InputLabel>
                <Select
                  labelId="custom-dropdown-label"
                  value={selectedValue}
                  onChange={(e) =>
                    handleChange(e, item.key, item.operation, selectedValue)
                  }
                  variant="outlined"
                  displayEmpty
                  IconComponent={ArrowDropDownIcon}
                  sx={{
                    borderRadius: "8px",
                    borderColor: "#e3e7ec",
                    color: "#2e333b",
                    backgroundColor: "#fff",
                    lineHeight: 1.5,
                    padding: "6px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "space-between",
                    minWidth: "225px",
                    height: "40px",
                  }}
                  renderValue={(value) => {
                    return value ? value : item.title ;
                  }}
                >
                  {item.values.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            );
          }

          default:
            return <></>;
        }
      })}
    </Box>
  );
};

export default WebinarSearch;
