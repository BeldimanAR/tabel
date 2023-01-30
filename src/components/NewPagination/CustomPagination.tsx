import React from "react";

// STYLES
import * as styled from "./CustomPaginationStyled";

// LIBRARIES

// MISC
import { IProps } from "./CustomPaginationModel";

// REDUX

// COMPONENTS

const CustomPagination = (props: IProps) => {
  // PROPS
  const { count = 0 } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <styled.CustomPaginationContainer>
      <styled.CustomPaginationNrOfPagesText></styled.CustomPaginationNrOfPagesText>
      {count > 1 && <styled.CustomPaginationComp {...props} />}
    </styled.CustomPaginationContainer>
  );
};

export default CustomPagination;
