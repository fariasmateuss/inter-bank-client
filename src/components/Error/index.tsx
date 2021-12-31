import { ReactNode } from 'react';
import { CustomError } from './styles';

type ErrorProps = {
  showError: string;
  children?: ReactNode;
};

export function Error({ showError, children }: ErrorProps) {
  return (
    <CustomError>
      {showError} {children}
    </CustomError>
  );
}
