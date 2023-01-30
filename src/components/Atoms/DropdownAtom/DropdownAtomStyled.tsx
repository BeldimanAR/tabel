import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { COLORS } from "../../../constants/variables";

export const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CustomForm = styled(TextField)`
  width: 100%;
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${COLORS.primaryBlack};
    /* height: 48px; */
    :focus {
      border: none;
    }
  }
`;

export const CustomMenuItem = styled(MenuItem)``;
