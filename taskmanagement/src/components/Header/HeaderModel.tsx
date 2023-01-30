import { IHeaderStyle } from "../../constants/models";

export interface IProps {
  title?: string;
  rightButton?: boolean;
  headerStyle?: IHeaderStyle;
  buttonLogo?: string;
  buttonText?: string;
  handleClick?: (event: any) => void;
}

export interface IStyled {
  headerStyle: IHeaderStyle;
}
