import { useState, useEffect } from "react";
// STYLES
import * as Styled from "./HeaderStyled";

// LIBRARIES

import { useNavigate } from "react-router-dom";

import { IProps } from "./HeaderModel";
import TitleAtom from "../Atoms/TitleAtom/TitleAtom";
import ButtonAtom from "../Atoms/ButtonAtom/ButtonAtom";

// MISC

// COMPONENTS

const Header = (props: IProps) => {
  // PROPS
  const {
    title = " ",
    headerStyle = "primary",
    rightButton,
    buttonLogo,
    buttonText,
    handleClick = () => {},
  } = props;
  // const { isOpen = false, setIsOpen = () => {} } = props;

  // CONSTANTS USING LIBRARIES

  const navigate = useNavigate();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Styled.HeaderContainer headerStyle={headerStyle}>
      <Styled.LeftContainer>
        <TitleAtom title={title} />
      </Styled.LeftContainer>
      <Styled.RightContainer>
        {rightButton && (
          <Styled.ButtonContainer>
            <ButtonAtom
              text={buttonText}
              buttonIcon={buttonLogo}
              handleClick={handleClick}
            />
          </Styled.ButtonContainer>
        )}
      </Styled.RightContainer>
    </Styled.HeaderContainer>
  );
};

export default Header;
