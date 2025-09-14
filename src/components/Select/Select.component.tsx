import React from 'react';

interface SelectProps {
  name: string;
  options: string[];
  multiple?: boolean;
}

const Select = ({ name, options, multiple = true }: SelectProps) => {
  return (
    <select name={name} multiple={multiple}>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
