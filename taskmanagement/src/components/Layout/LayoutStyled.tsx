// LIBRARIES
import { COLORS, DEVICE_SIZE } from "../../constants/variables";
import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 7.4%;
  z-index: 100;
`;

export const ContentWrapper = styled.div`
  height: 92.6%;
  background-color: ${COLORS.backgroundColor};
`;
