import styled, { css } from 'styled-components';

type CustomModalProps = {
  width: string;
  height: string;
  noShadow: boolean;
};

export const CustomModal = styled.div<CustomModalProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.colors.background[1]};

  ${({ noShadow }) =>
    !noShadow &&
    css`
      box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.1);
    `}

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 20px;
  padding: 20px;
  z-index: 5000;
`;
