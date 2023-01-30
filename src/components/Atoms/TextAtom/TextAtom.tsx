import { IProps } from "./TextModel";

// STYLES
import * as Styled from "./TextAtomStyled";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const TextAtom = (props: IProps) => {
  // PROPS
  const { text = "", textStyle = "primary" } = props;
  // textStyle = 'primary'

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS
  // const resizeWin = () => {
  //   if (window.innerWidth < 602) {
  //     setWidth(window.innerWidth);
  //   }
  // };

  // window.addEventListener('resize', resizeWin);
  // HANDLERS FUNCTIONS

  return (
    <Styled.CustomTextContainer>
      <Styled.TextContainer textStyle={textStyle}>{text}</Styled.TextContainer>
    </Styled.CustomTextContainer>
  );
};

export default TextAtom;
