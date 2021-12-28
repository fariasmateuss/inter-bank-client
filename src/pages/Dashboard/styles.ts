import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Panels = styled.main`
  width: 80%;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;

  > div {
    width: 100%;

    @media (min-width: 600px) {
      margin: 0 15px 0 15px;
    }

    & > div {
      width: 100%;
      margin-bottom: 20px;
    }

    &:nth-child(2) {
      display: flex;
      justify-content: flex-start;
    }
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 1066px) {
    flex-direction: column;
    justify-content: center;

    div#statement {
      display: flex;
      justify-content: start;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  width: 100%;

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    line-height: 47px;
  }

  div {
    flex: 4;
    margin-right: 20px;
  }

  button {
    flex: 1;
  }
`;
