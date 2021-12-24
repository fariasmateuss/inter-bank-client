import { ReactNode } from 'react';

import { CustomCard } from './styles';

type CardProps = {
  width: string;
  height: string;
  noShadow: boolean;
  noBorder: boolean;
  children?: ReactNode;
};

export function Modal({
  width,
  height,
  noShadow,
  noBorder,
  children,
}: CardProps) {
  return (
    <CustomCard
      width={width}
      height={height}
      noShadow={noShadow}
      noBorder={noBorder}
    >
      {children}
    </CustomCard>
  );
}
