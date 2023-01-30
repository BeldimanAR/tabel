import styled from "styled-components";
import { FONT_SIZE, FONT_WEIGHT } from "../../../constants/variables";

export const LabelWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LabelComponent = styled.label`
  font-size: ${FONT_SIZE.max16};
  font-weight: ${FONT_WEIGHT.semiBold};
  line-height: 18.75px;
`;
