import { MenuItem, Select } from '@mui/material';
import { Props } from '@/modules/Select/Interface';

const SelectModule = <V extends string | number | readonly string[] | undefined = string, >
({
   value,
   onChange,
   options,
   className
 }: Props<V>) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      variant={'standard'}
      className={className}
    >
      {options.map((option, index) => {
        return <MenuItem key={index} value={option.value}>{option.label}</MenuItem>;
      })}
    </Select>
  );
};

export default SelectModule;