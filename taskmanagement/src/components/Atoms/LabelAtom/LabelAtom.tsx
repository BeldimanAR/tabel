import React from "react";
import { IProps } from "./LabelAtomModel";

import * as Styled from "./LabelAtomStyled";

const LabelAtom = (props: IProps) => {
  const { text = "" } = props;
  return (
    <Styled.LabelWrapper>
      <Styled.LabelComponent>{text}</Styled.LabelComponent>
    </Styled.LabelWrapper>
  );
};

export default LabelAtom;
