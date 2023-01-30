import { useState, useEffect } from "react";
// STYLES
import * as Styled from "./BigHeaderStyled";

// LIBRARIES

import { useNavigate } from "react-router-dom";

import { IProps } from "./BigHeaderModel";
import TitleAtom from "../Atoms/TitleAtom/TitleAtom";
import ButtonAtom from "../Atoms/ButtonAtom/ButtonAtom";
import BigLogoHeader from "../../assets/icons/BigLogoHeader.svg";
import NotificationLogo from "../../assets/icons/NotificationLogo.svg";
import UserHeaderLogo from "../../assets/icons/UserHeaderLogo.svg";

// MISC

// COMPONENTS

const BigHeader = (props: IProps) => {
  // PROPS
  const {
    title = " ",
    headerStyle = "primary",
    rightButton,
    buttonLogo,
    buttonText,
  } = props;
  // const { isOpen = false, setIsOpen = () => {} } = props;

  // CONSTANTS USING LIBRARIES

  const navigate = useNavigate();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Styled.HeaderContainer headerStyle={headerStyle}>
      <Styled.LeftContainer>
        <Styled.ImageContainer
          src={BigLogoHeader}
          onClick={() => handleClick("/")}
        />
      </Styled.LeftContainer>
      <Styled.RightContainer>
        <Styled.ImageContainer src={NotificationLogo} />
        <Styled.ImageContainer src={UserHeaderLogo} />
      </Styled.RightContainer>
    </Styled.HeaderContainer>
  );
};

export default BigHeader;
