import styled from 'styled-components';

export const CustomInitials = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 74px;
  height: 74px;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 300;
  font-size: 2rem;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
