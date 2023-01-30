import React from "react";

import * as Styled from "./SearchAtomStyled";

import { IProps } from "./SearchAtomModel";

const SearchAtom = (props: IProps) => {
  const {
    value,
    options = [],
    handleSelect = () => {},
    disabled = false,
  } = props;

  return (
    <Styled.SearchWrapper>
      <Styled.SearchComponent
        disableClearable
        disabled={disabled}
        options={options}
        disablePortal
        value={value}
        // getOptionLabel={(option) => option?.label}
        onChange={(event, value) => handleSelect(value)}
        renderInput={(params) => (
          <Styled.SearchTextField
            {...params}
            variant="outlined"
            label="Search user"
          />
        )}
      />
    </Styled.SearchWrapper>
  );
};

export default SearchAtom;
