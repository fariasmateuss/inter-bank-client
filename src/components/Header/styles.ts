import styled from 'styled-components';

export const CustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.background[1]};
  padding: 15px 10% 15px 10%;

  img {
    width: 120px;
    height: auto;

    @media screen and (max-width: 450px) {
      width: 100px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
    display: flex;
    flex-direction: column;

    p > span {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }

    strong {
      padding: 3px 0 3px 0;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
