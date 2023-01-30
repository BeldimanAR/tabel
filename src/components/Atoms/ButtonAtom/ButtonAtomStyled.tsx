import styled, { css } from "styled-components";
import { IStyled } from "./ButtonAtomModel";
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "../../../constants/variables";

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ButtonComponent = styled.button<IStyled>(
  ({ buttonStyle }) => css`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: ${FONT_WEIGHT.regular};
    font-size: ${FONT_SIZE.max16};
    line-height: 18.75px;
    text-align: center;

    ${buttonStyle === "primaryLight" &&
    css`
      background-color: ${COLORS.primaryDarkBlue}26;
      color: ${COLORS.primaryDarkBlue};
      transition: all 0.3s ease-in-out;

      :hover {
        background-color: ${COLORS.primaryDarkBlue};
        color: ${COLORS.secondaryBackgroundColor};
      }
    `}
    ${buttonStyle === "primaryDark" &&
    css`
      background-color: ${COLORS.primaryDarkBlue};
      color: ${COLORS.secondaryBackgroundColor};
      transition: all 0.3s ease-in-out;

      :hover {
        background-color: ${COLORS.primaryBlue};
      }
    `}
    ${buttonStyle === "task" &&
    css`
      display: flex;
      /* justify-content: space-between; */
      gap: 10px;
      align-items: center;
      background-color: transparent;
      font-weight: 600;

      color: ${COLORS.secondaryBackgroundColor};
      /* transition: all 0.3s ease-in-out; */

      :hover {
        /* color: ${COLORS.primaryLightBlue}; */
        filter: brightness(0) saturate(100%) invert(62%) sepia(22%)
          saturate(1044%) hue-rotate(174deg) brightness(101%) contrast(101%);
      }
    `}
  `
);

export const ButtonText = styled.span`
  margin-top: 3px;
`;

export const ButtonIcon = styled.img`
  width: 24px;
`;
