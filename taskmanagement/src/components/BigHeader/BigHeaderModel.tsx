import { IHeaderStyle } from "../../constants/models";

export interface IProps {
  title?: string;
  rightButton?: boolean;
  headerStyle?: IHeaderStyle;
  buttonLogo?: string;
  buttonText?: string;
}

export interface IStyled {
  headerStyle: IHeaderStyle;
}
