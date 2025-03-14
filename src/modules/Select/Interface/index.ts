import { SelectInputProps } from '@mui/material/Select/SelectInput';

export interface SelectOption<V = string> {
  label: string;
  value: V;
  hide?: boolean;
}

export interface Props<V = string>  {
  options: SelectOption<V>[];
  value: V;
  onChange?: SelectInputProps<V>['onChange'];
  className?: string;
}