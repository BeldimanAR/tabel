import { IInputType } from "../../../constants/models";

export interface IProps {
  placeholder?: string;
  type?: IInputType;
  handleChange?: (event: any) => void;
  targetEvent?: string;
}
