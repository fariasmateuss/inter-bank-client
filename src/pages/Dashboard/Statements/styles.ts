import styled from 'styled-components';

type ContainerProps = {
  type: 'paid' | 'received';
};

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    display: flex;
    width: 100%;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;

  p {
    padding-bottom: 2px;
  }

  span {
    min-width: 60px;
    height: 60px;
    margin: 0 20px 20px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.background[1]};
    border-radius: 10px;
    background-color: ${({ type, theme }) =>
      type === `paid` ? theme.colors.red : theme.colors.green};
  }
`;
