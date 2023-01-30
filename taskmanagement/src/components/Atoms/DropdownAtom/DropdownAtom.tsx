import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { IProps } from "./DropdownAtomModel";
import * as Styled from "./DropdownAtomStyled";

const DropdownAtom = (props: IProps) => {
  const {
    options = [],
    disabled = false,
    value = "",
    handleSelect = () => {},
  } = props;

  return (
    <Styled.DropdownContainer>
      <Styled.CustomForm
        select
        disabled={disabled}
        value={value}
        label="Select"
        onChange={(event) => handleSelect(event.target.value)}
      >
        {options?.map((option) => {
          return (
            <Styled.CustomMenuItem value={option.label} key={option.id}>
              {option.label}
            </Styled.CustomMenuItem>
          );
        })}
      </Styled.CustomForm>
    </Styled.DropdownContainer>
  );
};

export default DropdownAtom;
