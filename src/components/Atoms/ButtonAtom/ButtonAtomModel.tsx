import { IButtonStyle } from "../../../constants/models";

export interface IProps {
  text?: string;
  handleClick?: (event: any) => void;
  buttonStyle?: IButtonStyle;
  buttonIcon?: string;
}

export interface IStyled {
  buttonStyle?: IButtonStyle;
}
