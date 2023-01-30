import styled, { css } from "styled-components";
import { COLORS, FONT_SIZE, SPACING } from "../../constants/variables";
import { IStyled } from "./DetailCardModel";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.secondaryBackgroundColor};
  border-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHeaderWrapper = styled.div`
  width: 100%;
  /* height: 80px; */
  height: 9.1%;
`;

export const CardContentWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding-top: 61px;
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const DateWrapper = styled.div`
  /* width: 128px; */
`;

export const LabelWrapper = styled.div`
  height: 19px;
  margin-bottom: 12px;
`;

export const DatePickerWrapper = styled.div`
  height: 48px;
`;

export const InputsContainer = styled.div`
  width: 640px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div``;

export const InputWrapper = styled.div<{ type?: string }>(
  ({ type }) => css`
    height: ${type === "short" ? "48px" : "150px"};
  `
);

export const SearchContainer = styled.div``;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${SPACING.max20};
  /* width: 288px; */
  /* height: 48px; */
`;
export const ButtonWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: grey;
`;
export const TextWrapper = styled.span`
  width: 200px;
  height: 200px;
  /* background-color: grey; */
`;
export const IconWrapper = styled.img`
  width: 32px;

  /* background-color: grey; */
`;
export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const PriorityCircle = styled.div<IStyled>(
  ({ number }) => css`
    color: white;
    font-size: ${FONT_SIZE.max16};
    border-radius: 20px;
    width: 25px;
    display: flex;
    justify-content: center;
    height: 24px;
    align-items: center;
    ${number === 1 &&
    css`
      background-color: #0051af;
    `}
    ${number === 2 &&
    css`
      background-color: #3fb615;
    `}
    ${number === 3 &&
    css`
      background-color: #ffcc15;
    `}
    ${number === 4 &&
    css`
      background-color: #ff8515;
    `}
    ${number === 5 &&
    css`
      background-color: #3fb615;
    `}
  `
);
