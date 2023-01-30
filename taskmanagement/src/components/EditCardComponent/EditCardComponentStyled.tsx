import styled, { css } from "styled-components";
import { COLORS } from "../../constants/variables";

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
  flex-direction: column;
  padding-top: 61px;
  gap: 32px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 32px;
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  width: 128px;
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
  /* height: 400px; */
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
  width: 288px;
  height: 48px;
`;
export const ButtonWrapper = styled.div`
  width: 128px;
  height: 48px;
  /* background-color: grey; */
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const DropdownWrapper = styled.div`
  width: 126px;
`;

// export const DropdownComponentWrapper = styled.div``;
