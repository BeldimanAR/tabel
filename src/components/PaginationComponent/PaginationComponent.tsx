// STYLES
import { IProps } from "./PaginationModel";
import * as Styled from "./PaginationStyled";

import { useState, useEffect, ChangeEvent } from "react";

// LIBRARIES

// MISC

// **!!! How to render on page  !!!** //

// const [projects, setProjects] = useState([]);

//       {projects?.map((list, index) => {
//         return (
//           <Styled.CardContainer key={list.id}>
//             <CustomCardComponent
//               key={list.id}
//               title={list.title}
//               text={list.text}
//               source={list.source}
//             />

// **!!! How to make prop  !!!** //

// setProjects={(page) => setProjects(page)}

// **!!! Pagesize prop renders how many items should on each page  !!!** //

// COMPONENTS

const PaginationComponent = (props: IProps) => {
  // PROPS
  const {
    setProjects = () => {},
    list = [],
    pageSize = 10,
    id = 0,
    page = 1,
  } = props;
  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    setPagination({ ...pagination, count: list.length });
    const data = list.slice(pagination.from, pagination.to);
    setProjects(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.from, pagination.to]);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });

    localStorage.setItem("pageCurrentNumber", `${page}`);
  };

  return (
    <Styled.PaginationContainer>
      <Styled.PaginationWrapper
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
        siblingCount={0}
        id={id.toString()}
        page={page}
      />
    </Styled.PaginationContainer>
  );
};

export default PaginationComponent;
