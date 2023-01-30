export interface IProps {
  options?: any;
  handleSelect?: (any) => void;
  disabled?: boolean;
  value?: string;
}

export type ISearchOptions = {
  id: number;
  label: string;
};
