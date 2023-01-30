import styled, { css } from "styled-components";
import {
  COLORS,
  DEVICE_SIZE,
  FONT_SIZE,
  FONT_WEIGHT,
} from "../../../constants/variables";

import { IStyled } from "../TitleAtom/TitleAtomModel";

export const CustomTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.span<IStyled>(
  ({ titleStyle }) => css`
    ${titleStyle === "primary" &&
    css`
      font-size: ${FONT_SIZE.max32};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.secondaryBackgroundColor};
    `}
    ${titleStyle === "secondary" &&
    css`
      font-size: ${FONT_SIZE.max40};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.backgroundColor};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: 60px; */
        text-align: center;
      }
    `}
    ${titleStyle === "modalContent" &&
    css`
      font-size: ${FONT_SIZE.max40v24};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.primaryDarkBlue};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: 60px; */
        text-align: center;
      }
    `}

    ${titleStyle === "terms" &&
    css`
      font-size: ${FONT_SIZE.max60v30};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.primaryDarkBlue};
      @media (max-width: ${DEVICE_SIZE.MOBILE}) {
        /* font-size: 60px; */
        text-align: center;
        font-size: ${FONT_SIZE.max80};
      }
    `}
  `
);
