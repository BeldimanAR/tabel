import React from "react";

import * as Styled from "./InputAtomStyled";

import { IProps } from "./InputAtomModel";

const InputAtom = (props: IProps) => {
  const {
    placeholder = "",
    type = "shortInput",
    handleChange = () => {},
    targetEvent = "",
  } = props;

  return (
    <Styled.InputWrapper>
      {type === "shortInput" ? (
        <Styled.ShortInputComponent
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={targetEvent}
        />
      ) : (
        <Styled.LongInputComponent
          placeholder={placeholder}
          maxLength={1000}
          onChange={handleChange}
          value={targetEvent}
        />
      )}
    </Styled.InputWrapper>
  );
};

export default InputAtom;
