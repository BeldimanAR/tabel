import React from "react";
import { IProps } from "./ButtonAtomModel";

import * as Styled from "./ButtonAtomStyled";

const ButtonAtom = (props: IProps) => {
  const {
    buttonStyle = "task",
    text = " ",
    handleClick = () => {},
    buttonIcon,
  } = props;

  return (
    <Styled.ButtonWrapper>
      <Styled.ButtonComponent buttonStyle={buttonStyle} onClick={handleClick}>
        {buttonStyle === "task" && <Styled.ButtonIcon src={buttonIcon} />}

        <Styled.ButtonText>{text}</Styled.ButtonText>
      </Styled.ButtonComponent>
    </Styled.ButtonWrapper>
  );
};

export default ButtonAtom;
