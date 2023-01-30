import { ChangeEvent } from "react";

export interface IProps {
  page: number;
  count: number;
  filenumber?: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
}
