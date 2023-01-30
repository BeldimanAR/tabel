import React from "react";

import * as Styled from "./EditPageStyled";

import EditCardComponent from "../../components/EditCardComponent/EditCardComponent";

const CreatePage = () => {
  return (
    <Styled.EditPageContainer>
      <Styled.CardWrapper>
        <EditCardComponent />
      </Styled.CardWrapper>
    </Styled.EditPageContainer>
  );
};

export default CreatePage;
