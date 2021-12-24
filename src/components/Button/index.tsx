import { ButtonHTMLAttributes, ReactNode } from 'react';

import { CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
export function Button({ children, ...rest }: ButtonProps) {
  return <CustomButton {...(rest ?? {})}>{children}</CustomButton>;
}
