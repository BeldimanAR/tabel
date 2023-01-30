export interface IProps {
  options?: ISelectOptions[];
  disabled?: boolean;
  value?: string;
  handleSelect?: (any) => void;
}

export type ISelectOptions = {
  id?: number;
  label?: any;
};
