import styled from 'styled-components';

import background from '@assets/background-login.jpg';

export const Wrapper = styled.main`
  position: relative;
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 50vh;

  background-image: url(${background});
  background-size: cover;
  background-position: center;

  z-index: -1;
`;

export const ModalForm = styled.form`
  margin-top: 50px;
  width: 90%;
  flex: 1;
`;

export const ModalBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};

    a {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
