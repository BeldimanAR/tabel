// STYLES
import * as Styled from "./LayoutStyled";
import { useState } from "react";

// LIBRARIES

// MISC
import { IProps } from "./LayoutModel";
import Header from "../Header/Header";
import BigHeader from "../BigHeader/BigHeader";
// COMPONENTS

const Layout = (props: IProps) => {
  // PROPS
  const { children } = props;

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.LayoutContainer>
      <Styled.HeaderWrapper>
        <BigHeader />
      </Styled.HeaderWrapper>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
    </Styled.LayoutContainer>
  );
};

export default Layout;
