import { InputHTMLAttributes } from 'react';

import { CustomInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName?: string;
}

export function Input({ fieldName, ...rest }: InputProps) {
  return (
    <CustomInput>
      <label htmlFor="input">{fieldName}</label>
      <input {...rest} />
    </CustomInput>
  );
}
