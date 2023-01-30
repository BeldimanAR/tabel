// LIBRARIES
import styled from "styled-components";

// MISC

import { Pagination } from "@mui/material";
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "../../constants/variables";

export const CustomPaginationContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
`;
export const CustomPaginationNrOfPagesText = styled.span`
  color: ${COLORS.primaryDarkBlue};

  font-size: ${FONT_SIZE.max16};
  font-weight: ${FONT_WEIGHT.semiBold};
`;
export const CustomPaginationComp = styled(Pagination)`
  button {
    background-color: transparent;
    color: ${COLORS.primaryDarkBlue};

    font-size: ${FONT_SIZE.max16};
    font-family: ${FONT_FAMILY.roboto};
  }

  .MuiButtonBase-root {
    background-color: transparent;
    color: ${COLORS.primaryDarkBlue};

    &.Mui-selected {
      &:hover {
        background-color: transparent;
        color: ${COLORS.primaryBlue};
      }
      background-color: transparent;
      color: ${COLORS.primaryDarkBlue};
    }
    &:hover {
      background-color: transparent;
      color: ${COLORS.primaryBlue};
    }
  }
  .MuiPaginationItem-root {
    font-size: ${FONT_SIZE.max16};
    font-family: ${FONT_FAMILY.roboto};
    color: ${COLORS.primaryLightBlue}66;
  }

  .MuiPagination-text {
    color: ${COLORS.primaryDarkBlue};
  }
  .MuiSvgIcon-root {
    color: ${COLORS.primaryDarkBlue};
  }
`;
