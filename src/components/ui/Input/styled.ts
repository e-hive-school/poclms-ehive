import styled from 'styled-components';

export const StyledInput = styled.input`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.blue[500]};
  font-size: 14px;
  height: 40px;
  padding: 0 10px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: #00b4ff;
    outline: none;
  }
`;
