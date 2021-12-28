import styled from 'styled-components';

export const CustomButton = styled.button`
  width: 100%;
  height: 48px;

  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0.875rem;

  color: ${({ theme }) => theme.colors.background[1]};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
  transition: ease-in-out 0.2s;

  &:hover {
    filter: opacity(0.8);
  }

  &:disabled {
    filter: opacity(0.4);
  }
`;
