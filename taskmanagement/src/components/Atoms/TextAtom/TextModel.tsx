import { ITextStyle } from "../../../constants/models";

export interface IProps {
  text: string;
  textStyle?: ITextStyle;
}

export interface IStyled {
  textStyle?: ITextStyle;
}
