import React, { useState } from "react";

import * as Styled from "./CardComponentStyled";

import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import DatePickerAtom from "../Atoms/DatePickerAtom/DatePickerAtom";
import LabelAtom from "../Atoms/LabelAtom/LabelAtom";
import InputAtom from "../Atoms/InputAtom/InputAtom";
import SearchAtom from "../Atoms/SearchAtom/SearchAtom";
import DropdownAtom from "../Atoms/DropdownAtom/DropdownAtom";
import ButtonAtom from "../Atoms/ButtonAtom/ButtonAtom";
import addIcon from "../../assets/icons/addIcon.svg";
import { REST } from "../../config/axiosConfig";
import moment from "moment";

const CardComponent = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [user, setUser] = useState<any>();
  const [priority, setPriority] = useState<any>(1);
  const [status, setStatus] = useState<any>();
  const navigate = useNavigate();

  const taskStatus = [
    // { id: 1, label: "unu" },
    // { id: 2, label: "doi" },
    // { id: 3, label: "trei" },
  ];
  const users = [
    // { id: 1, label: "unu" },
    // { id: 2, label: "doi" },
    // { id: 3, label: "trei" },
  ];
  const priorities = [
    { id: 1, label: 1 },
    { id: 2, label: 2 },
    { id: 3, label: 3 },
    { id: 4, label: 4 },
    { id: 5, label: 5 },
  ];
  const handleSubmit = () => {
    let data = {
      title: taskTitle,
      description: taskDescription,
      fromDate: moment(startDate).format("DD/MM/YYYY"),
      toDate: moment(endDate).format("DD/MM/YYYY"),
      priority: priority,
    };
    sendData(data);
    // console.log(data);

    navigate("/");
    navigate(0);
  };
  const sendData = async (data) => {
    await REST.post(`/task/create`, data)
      .then(() => {})
      .catch((err) => {
        console.log("err", err);
      });
  };
  // console.log(data

  // const handleInputChange = (function, event) => {
  //  function(event)}
  // };

  return (
    <Styled.CardContainer>
      <Styled.CardHeaderWrapper>
        <Header
          headerStyle="secondary"
          title="Create new task"
          buttonLogo={addIcon}
        />
      </Styled.CardHeaderWrapper>
      <Styled.CardContentWrapper>
        <Styled.ContentContainer>
          <Styled.FirstContainer>
            <Styled.DateContainer>
              <Styled.DateWrapper>
                <Styled.LabelWrapper>
                  <LabelAtom text="From" />
                </Styled.LabelWrapper>
                <Styled.DatePickerWrapper>
                  <DatePickerAtom
                    // label="Starting"
                    value={startDate}
                    onChange={(event) => {
                      setStartDate(event);
                    }}
                  />
                </Styled.DatePickerWrapper>
              </Styled.DateWrapper>
              <Styled.DateWrapper>
                <Styled.LabelWrapper>
                  <LabelAtom text="To" />
                </Styled.LabelWrapper>
                <Styled.DatePickerWrapper>
                  <DatePickerAtom
                    // label="Starting"
                    value={endDate}
                    onChange={(event) => setEndDate(event)}
                  />
                </Styled.DatePickerWrapper>
              </Styled.DateWrapper>
            </Styled.DateContainer>
            <Styled.SearchContainer>
              <Styled.LabelWrapper>
                <LabelAtom text="User" />
              </Styled.LabelWrapper>
              <Styled.SearchWrapper>
                <SearchAtom
                  handleSelect={setUser}
                  options={users}
                  disabled={true}
                />
              </Styled.SearchWrapper>
            </Styled.SearchContainer>
            <Styled.DropdownContainer>
              <Styled.DropdownWrapper>
                <Styled.LabelWrapper>
                  <LabelAtom text="Priority" />
                </Styled.LabelWrapper>
                <>
                  <DropdownAtom
                    options={priorities}
                    value={priority}
                    handleSelect={(event) => setPriority(event)}
                  />
                </>
              </Styled.DropdownWrapper>
              <Styled.DropdownWrapper>
                <Styled.LabelWrapper>
                  <LabelAtom text="Status" />
                </Styled.LabelWrapper>
                <>
                  <DropdownAtom
                    options={taskStatus}
                    value={status}
                    handleSelect={setStatus}
                    disabled={true}
                  />
                </>
              </Styled.DropdownWrapper>
            </Styled.DropdownContainer>
          </Styled.FirstContainer>

          <Styled.SecondContainer>
            <Styled.InputsContainer>
              <Styled.InputContainer>
                <Styled.LabelWrapper>
                  <LabelAtom text="Task title" />
                </Styled.LabelWrapper>
                <Styled.InputWrapper type="short">
                  <InputAtom
                    type="shortInput"
                    placeholder="Enter name"
                    handleChange={(event) => setTaskTitle(event.target.value)}
                    targetEvent={taskTitle}
                  />
                </Styled.InputWrapper>
              </Styled.InputContainer>
              <Styled.InputContainer>
                <Styled.LabelWrapper>
                  <LabelAtom text="Task description" />
                </Styled.LabelWrapper>
                <Styled.InputWrapper>
                  <InputAtom
                    type="longInput"
                    placeholder="Maximum 1000 characters"
                    handleChange={(event) =>
                      setTaskDescription(event.target.value)
                    }
                    targetEvent={taskDescription}
                  />
                </Styled.InputWrapper>
              </Styled.InputContainer>
            </Styled.InputsContainer>
          </Styled.SecondContainer>
        </Styled.ContentContainer>
        <Styled.ButtonsContainer>
          <Styled.ButtonWrapper>
            <ButtonAtom
              text="Cancel"
              buttonStyle="primaryLight"
              handleClick={() => navigate("/")}
            />
          </Styled.ButtonWrapper>
          <Styled.ButtonWrapper>
            <ButtonAtom
              text="Done"
              buttonStyle="primaryDark"
              handleClick={handleSubmit}
            />
          </Styled.ButtonWrapper>
        </Styled.ButtonsContainer>
      </Styled.CardContentWrapper>
    </Styled.CardContainer>
  );
};

export default CardComponent;
