import styled from "styled-components";
import { Pagination } from "@mui/material";
import {
  COLORS,
  DEVICE_SIZE,
  FONT_FAMILY,
  FONT_WEIGHT,
} from "../../constants/variables";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationWrapper = styled(Pagination)`
  button {
    color: ${COLORS.primaryLightBlue};
    font-size: 20px;
    font-weight: ${FONT_WEIGHT.semiBold};
    /* min-width: 6px;
    width: 20px;
    max-width: 20px; */
    height: 24px;
    /* opacity: 0.5; */

    &.Mui-selected {
      color: ${COLORS.primaryDarkBlue};
      background-color: transparent;
      /* opacity: 1; */
    }
  }
  svg {
    font-size: 32px;
    /* color: red; */
    /* opacity: 0.8; */
  }
  & .MuiPaginationItem-ellipsis {
    /* font-size: 25px; */
    color: ${COLORS.primaryBlue};
  }
`;
