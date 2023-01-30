import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { COLORS } from "../../../constants/variables";

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchComponent = styled(Autocomplete)`
  && {
    .MuiAutocomplete-inputRoot {
      width: 100%;
      height: 48px;
      border: none;
    }
  }
`;

export const SearchTextField = styled(TextField)`
  && {
    .MuiFormControl-root {
      /* max-height: 48px; */
    }

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${COLORS.primaryBlack};

      :focus {
        border: none;
      }
    }
  }
`;
