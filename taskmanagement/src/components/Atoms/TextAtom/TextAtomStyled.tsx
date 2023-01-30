import styled, { css } from "styled-components";
import {
  COLORS,
  DEVICE_SIZE,
  FONT_SIZE,
  FONT_WEIGHT,
} from "../../../constants/variables";

import { IStyled } from "../TextAtom/TextModel";

export const CustomTextContainer = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const TextContainer = styled.span<IStyled>(
  ({ textStyle }) => css`
    ${textStyle === "primary" &&
    css`
      font-size: ${FONT_SIZE.max16};
      font-weight: ${FONT_WEIGHT.regular};
      color: ${COLORS.primaryBlack};
      line-height: 19px;
      opacity: 0.6;
    `}
    ${textStyle === "secondary" &&
    css`
      font-size: ${FONT_SIZE.max40};
      font-weight: ${FONT_WEIGHT.bold};
      color: ${COLORS.backgroundColor};
    `}
    ${textStyle === "modalContent" &&
    css`
      font-size: ${FONT_SIZE.max40v24};
      font-weight: ${FONT_WEIGHT.semiBold};
      color: ${COLORS.primaryDarkBlue};
    `}
  `
);
