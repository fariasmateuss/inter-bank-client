import styled from 'styled-components';

export const CustomInput = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;

    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.gray};
  }

  input {
    font-size: 0.875rem;
    line-height: 17px;

    background: #f5f6fa;
    border-radius: 4px;
    border: none;

    color: ${({ theme }) => theme.colors.black[1]};
    padding: 14px;
    margin-bottom: 1rem;
  }
`;
