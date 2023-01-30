import React, { useState, useEffect } from "react";

import * as Styled from "./EditCardComponentStyled";

import { useLocation, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import DatePickerAtom from "../Atoms/DatePickerAtom/DatePickerAtom";
import LabelAtom from "../Atoms/LabelAtom/LabelAtom";
import InputAtom from "../Atoms/InputAtom/InputAtom";
import SearchAtom from "../Atoms/SearchAtom/SearchAtom";
import DropdownAtom from "../Atoms/DropdownAtom/DropdownAtom";
import ButtonAtom from "../Atoms/ButtonAtom/ButtonAtom";
import { REST } from "../../config/axiosConfig";
import { LocalHospital } from "@mui/icons-material";
import moment from "moment";
import dayjs from "dayjs";

const EditCardComponent = () => {
  const { state } = useLocation();
  const { id } = state;

  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    fromDate: "",
    toDate: " ",
    title: " ",
    description: " ",
    priority: " ",
    status: " ",
    userId: 0,
    userName: " ",
  });

  const getData = async () => {
    await REST.get(`/task/details/${id}`).then((answer) => {
      setData(answer.data);
    });
    await REST.get(`/cnppUser/getAll`).then((answer) => {
      const finalUserList = answer.data.cnppUserList?.map((item) => {
        return { id: item.id, label: item.name };
      });

      setUser(finalUserList);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();

  const taskStatus = [
    { id: 1, label: "Opened" },
    { id: 2, label: "Closed" },
  ];

  const priorities = [
    { id: 1, label: 1 },
    { id: 2, label: 2 },
    { id: 3, label: 3 },
    { id: 4, label: 4 },
    { id: 5, label: 5 },
  ];

  const handleSubmit = () => {
    let submitData = {
      ...data,
      fromDate: moment(data.fromDate).format("DD/MM/YYYY"),
      toDate: moment(data.toDate).format("DD/MM/YYYY"),
    };
    sendData(submitData);
    navigate("/details", { state: { id } });
    navigate(0);
  };
  const sendData = async (data) => {
    await REST.put(`/task/update`, data);
  };

  const handleInputChange = (name, event) => {
    setData((prev) => ({
      ...prev,
      [name]: event,
    }));
  };
  const handleDateInputChange = (name, event) => {
    setData((prev) => ({
      ...prev,
      [name]: event,
    }));
  };
  const handleUserInputChange = (name, id, event) => {
    setData((prev) => ({
      ...prev,
      [name]: event.label,
      [id]: event.id,
    }));
    // console.log(event);
  };

  console.log("data.fromDate", data.fromDate);
  console.log("moment", moment(data.fromDate, "DD/MM/YYYY"));
  return (
    <Styled.CardContainer>
      <Styled.CardHeaderWrapper>
        <Header headerStyle="secondary" title="Edit task" />
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
                    value={moment(data.fromDate, "DD/MM/YYYY")}
                    onChange={(event) =>
                      handleDateInputChange("fromDate", event)
                    }
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
                    value={moment(data.toDate, "DD/MM/YYYY")}
                    onChange={(event) => handleDateInputChange("toDate", event)}
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
                  value={data.userName}
                  handleSelect={(event) =>
                    handleUserInputChange("userName", "userId", event)
                  }
                  options={user}
                  // disabled={true}
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
                    value={data.priority}
                    handleSelect={(event) =>
                      handleInputChange("priority", event)
                    }
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
                    value={data.status}
                    handleSelect={(event) => handleInputChange("status", event)}
                    // disabled={true}
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
                    handleChange={(event) =>
                      handleInputChange("title", event.target.value)
                    }
                    targetEvent={data.title}
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
                    handleChange={(event) =>
                      handleInputChange("description", event.target.value)
                    }
                    targetEvent={data.description}
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
              handleClick={() => navigate("/details")}
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

export default EditCardComponent;
