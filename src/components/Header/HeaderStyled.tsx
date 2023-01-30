import styled, { css } from "styled-components";
import { COLORS, SPACING } from "../../constants/variables";
import { IStyled } from "../Header/HeaderModel";
// import {
//   COLORS,
//   FONT_FAMILY,
//   FONT_WEIGHT,
//   FONT_SIZE,
//   DEVICE_SIZE,
// } from "constants/variables";

export const HeaderContainer = styled.span<IStyled>(
  ({ headerStyle }) => css`
    ${headerStyle === "primary" &&
    css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      background-color: ${COLORS.secondaryBackgroundColor};
    `}
    ${headerStyle === "secondary" &&
    css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 16px 16px 0px 0px;

      background-color: ${COLORS.primaryDarkBlue};
    `}
  `
);

export const LeftContainer = styled.div`
  padding-left: ${SPACING.max60v30};
`;
export const RightContainer = styled.div`
  padding-right: ${SPACING.max60v30};
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  width: ${SPACING.max160};
  background-color: transparent;
  height: 35%;
  border: none;
  cursor: pointer;
`;
export const LogoContainer = styled.div``;
export const TextContainer = styled.div``;
