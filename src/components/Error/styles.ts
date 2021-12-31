import styled from 'styled-components';

export const CustomError = styled.p`
  display: block;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 8px;
  font-size: 14px;
`;
