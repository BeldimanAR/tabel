import styled from "styled-components";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../../../constants/variables";

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ShortInputComponent = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid ${COLORS.primaryBlack};
  border-radius: 5px;
  padding-left: 16px;
  background-color: ${COLORS.secondaryBackgroundColor};

  font-size: ${FONT_SIZE.max16};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 18.75px;
  color: ${COLORS.primaryBlack};

  &:focus {
    outline: none;
  }
`;

export const LongInputComponent = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${COLORS.primaryBlack};
  resize: none;
  border-radius: 5px;
  padding-left: 16px;
  padding-top: 15px;
  background-color: ${COLORS.secondaryBackgroundColor};

  font-size: ${FONT_SIZE.max16};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 18.75px;
  color: ${COLORS.primaryBlack};
  &:focus {
    outline: none;
  }
`;
