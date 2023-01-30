// STYLES
import * as Styled from "./HomePageStyled";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { FaBeer } from "react-icons/fa";

// LIBRARIES
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../../constants/variables";
import TablePagination from "@mui/material/TablePagination";
import { useTheme } from "styled-components";
import ButtonAtom from "../../components/Atoms/ButtonAtom/ButtonAtom";
import UserIcon from "../../assets/icons/UserIcon.svg";
import addIcon from "../../assets/icons/addIcon.svg";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
// MISC

// COMPONENTS

import { REST } from "../../config/axiosConfig";
import CustomPagination from "../../components/NewPagination/CustomPagination";

const HomePage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const navigation = useNavigate();
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: `${COLORS.primaryLightBlue}`,
      fontWeight: `${FONT_WEIGHT.semiBold}`,
      color: `${COLORS.primaryDarkBlue}`,
      fontSize: `${FONT_SIZE.max16}`,
    },
    [`&.${tableCellClasses.body}`]: {
      textAlign: "center",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    height: "64px",
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(0, 81, 175, 0.15);",
      border: 0,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const pageSize = 9;

  const getData = async () => {
    await REST.get(`/task/getAll/${page}/${pageSize}`).then((answer) => {
      setData(answer.data.rows);
    });
  };

  // CONSTANTS USING HOOKS

  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);

  // const [projects, setProjects] = useState<
  //   { date: string; task: string; user: string; priority: number }[]
  // >([]);

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  useEffect(() => {
    getData();

    //@ts-ignore
  }, [page]);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handleHeaderNavigate = (id) => {
    navigation("/create");
  };

  const handleClickDetails = (id) => {
    navigation("/details", { state: { id } });
  };

  const handlePageChange = (
    name: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  console.log(data);
  return (
    <Styled.HomePageContainer>
      <Styled.ContentContainer>
        <Styled.HeaderContainer>
          <Header
            headerStyle="secondary"
            title="Task List"
            rightButton
            buttonText="Create new task"
            buttonLogo={addIcon}
            handleClick={handleHeaderNavigate}
          />
        </Styled.HeaderContainer>
        <Styled.TableContainer>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "none", borderRadius: "0" }}
          >
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">CREATED</StyledTableCell>
                  <StyledTableCell align="center">STARTING</StyledTableCell>
                  <StyledTableCell align="center">TASK</StyledTableCell>
                  <StyledTableCell align="center">USER</StyledTableCell>
                  <StyledTableCell align="center">PRIORITY</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ border: "none" }}>
                {data["content"]?.map((data) => (
                  <StyledTableRow key={data["id"]}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ width: "10%" }}
                    >
                      <Styled.TextDateWrapper>
                        {data["createdTime"]}
                      </Styled.TextDateWrapper>
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ width: "10%" }}
                    >
                      <Styled.TextDateWrapper>
                        {data["fromDate"]}
                      </Styled.TextDateWrapper>
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ width: "35%" }}>
                      <Styled.TextWrapper>{data["title"]}</Styled.TextWrapper>
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ width: "20%" }}>
                      <Styled.CenteringWrapper>
                        <Styled.IconWrapper src={UserIcon} />
                        <Styled.TextWrapper> {data["name"]}</Styled.TextWrapper>
                      </Styled.CenteringWrapper>
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ width: "15%" }}>
                      <Styled.CenteringWrapper>
                        <Styled.PriorityWrapper number={data["priority"]}>
                          {data["priority"]}
                        </Styled.PriorityWrapper>
                      </Styled.CenteringWrapper>
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ width: "10%" }}>
                      <Styled.CenteringWrapper>
                        <Styled.ButtonWrapper>
                          <ButtonAtom
                            buttonStyle="primaryLight"
                            text="Details"
                            handleClick={() => handleClickDetails(data["id"])}
                          />
                        </Styled.ButtonWrapper>
                      </Styled.CenteringWrapper>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Styled.PaginationContainer>
            {/* <PaginationComponent
              pageSize={pageSize}
              list={data}
              setProjects={(page: any) => {
                setProjects(page);
              }}
              id={1}
              page={2}
            /> */}
            <CustomPagination
              page={page}
              count={data["totalPages"]}
              onChange={(event, value) => handlePageChange(event, value)}
              filenumber={data["totalElements"]}
            />
          </Styled.PaginationContainer>
        </Styled.TableContainer>
      </Styled.ContentContainer>
    </Styled.HomePageContainer>
  );
};
export default HomePage;
