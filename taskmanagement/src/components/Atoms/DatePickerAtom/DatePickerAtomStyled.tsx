import styled from "styled-components";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { COLORS } from "../../../constants/variables";

export const DatePickerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const DatePickerComponent = styled(DesktopDatePicker)`
  .MuiInputBase-root {
    font-size: 11.5px;
    font-weight: bold;
  }
`;
