import React, { useState, useEffect } from "react";
import { REST } from "../../config/axiosConfig";

import * as Styled from "./DetailCardStyled";

import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import DatePickerAtom from "../Atoms/DatePickerAtom/DatePickerAtom";
import LabelAtom from "../Atoms/LabelAtom/LabelAtom";
import InputAtom from "../Atoms/InputAtom/InputAtom";
import SearchAtom from "../Atoms/SearchAtom/SearchAtom";
import TextAtom from "../Atoms/TextAtom/TextAtom";
import UserIcon from "../../assets/icons/UserIcon.svg";
import HeaderEdit from "../../assets/icons/HeaderEdit.svg";
import buttonIcon from "../../assets/icons/buttonIcon.svg";
import GroupEditIcon from "../../assets/icons/GroupEditIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import HeaderEdit3 from "../../assets/icons/HeaderEdit3.svg";
import { useLocation } from "react-router-dom";

const DetailCard = () => {
  const { state } = useLocation();
  const { id } = state;
  console.log(id);

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    await REST.get(`/task/details/${id}`).then((answer) => {
      setData(answer.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };
  console.log(data["id"]);

  return (
    <Styled.CardContainer>
      <Styled.CardHeaderWrapper>
        <Header
          headerStyle="secondary"
          title="Task details "
          rightButton
          buttonText="Edit task"
          buttonLogo={editIcon}
          handleClick={() => handleEdit(data["id"])}
        />
      </Styled.CardHeaderWrapper>
      <Styled.CardContentWrapper>
        <Styled.FirstContainer>
          <Styled.DateContainer>
            <Styled.DateWrapper>
              <Styled.LabelWrapper>
                <LabelAtom text="Date" />
              </Styled.LabelWrapper>
              <Styled.TextWrapper>
                <TextAtom text={`${data["fromDate"]} - ${data["toDate"]}`} />
              </Styled.TextWrapper>
            </Styled.DateWrapper>
          </Styled.DateContainer>
          <Styled.SearchContainer>
            <Styled.LabelWrapper>
              <LabelAtom text="User" />
            </Styled.LabelWrapper>
            <Styled.SearchWrapper>
              <Styled.IconWrapper src={UserIcon} />
              <TextAtom text={data["userName"]} />
            </Styled.SearchWrapper>
          </Styled.SearchContainer>
          <Styled.StatusContainer>
            <Styled.SearchContainer>
              <Styled.LabelWrapper>
                <LabelAtom text="Priority" />
              </Styled.LabelWrapper>
              <Styled.SearchWrapper>
                <Styled.PriorityCircle number={data["priority"]}>
                  {data["priority"]}
                </Styled.PriorityCircle>
              </Styled.SearchWrapper>
            </Styled.SearchContainer>
            <Styled.SearchContainer>
              <Styled.LabelWrapper>
                <LabelAtom text="Status" />
              </Styled.LabelWrapper>
              <Styled.SearchWrapper>
                <TextAtom text={data["status"]} />
              </Styled.SearchWrapper>
            </Styled.SearchContainer>
          </Styled.StatusContainer>
        </Styled.FirstContainer>

        <Styled.SecondContainer>
          <Styled.InputsContainer>
            <Styled.InputContainer>
              <Styled.LabelWrapper>
                <LabelAtom text="Task title" />
              </Styled.LabelWrapper>
              <Styled.InputWrapper type="short">
                <TextAtom text={data["title"]} />
              </Styled.InputWrapper>
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.LabelWrapper>
                <LabelAtom text="Task description" />
              </Styled.LabelWrapper>
              <Styled.InputWrapper>
                <TextAtom text={data["description"]} />
              </Styled.InputWrapper>
            </Styled.InputContainer>
          </Styled.InputsContainer>
        </Styled.SecondContainer>
      </Styled.CardContentWrapper>
    </Styled.CardContainer>
  );
};

export default DetailCard;
