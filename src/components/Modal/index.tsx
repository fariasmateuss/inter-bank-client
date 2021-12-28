import { ReactNode } from 'react';

import { CustomModal } from './styles';

type ModalProps = {
  width: string;
  height: string;
  noShadow: boolean;
  children?: ReactNode;
};

export function Modal({ width, height, noShadow, children }: ModalProps) {
  return (
    <CustomModal width={width} height={height} noShadow={noShadow}>
      {children}
    </CustomModal>
  );
}
