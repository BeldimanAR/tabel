// LIBRARIES
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../../constants/variables";
import styled, { css } from "styled-components";
import DataTable from "react-data-table-component";
import { IStyled } from "./HomePageModel";

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 75%;
  height: 87.7%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: ${COLORS.secondaryBackgroundColor};
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 9.1%;
`;

export const TableContainer = styled.div`
  height: 89.9%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  width: 72px;
  height: 32px;
`;
export const TextWrapper = styled.div`
  color: #000000;
  opacity: 0.5;
  text-align: left;
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.max16};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const TextDateWrapper = styled.div`
  color: #000000;
  opacity: 0.5;
  text-align: center;
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.max16};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const PriorityWrapper = styled.div<IStyled>(
  ({ number }) => css`
    color: white;
    font-size: ${FONT_SIZE.max14};
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

export const CenteringWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const IconWrapper = styled.img`
  width: 32px;
`;
export const PaginationContainer = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
`;
