// STYLES
import React from "react";
import * as styled from "./DatePickerAtomStyled";
import { IProps } from "./DatePickerAtomModel";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

// LIBRARIES

// MISC

// REDUX

// COMPONENTS

const DatePickerFormat = (props: IProps) => {
  // PROPS
  const { label = "", onChange = () => {}, value } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs(' '));

  // const handleChange = (newValue: Dayjs | null) => {
  //   setValue(newValue);
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <styled.DatePickerComponent
          label={label}
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};
export default DatePickerFormat;
