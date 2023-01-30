import React from "react";

import * as Styled from "./CreatePageStyled";
import CardComponent from "../../components/CardComponent/CardComponent";

const CreatePage = () => {
  return (
    <Styled.CreatePageContainer>
      <Styled.CardWrapper>
        <CardComponent />
      </Styled.CardWrapper>
    </Styled.CreatePageContainer>
  );
};

export default CreatePage;
