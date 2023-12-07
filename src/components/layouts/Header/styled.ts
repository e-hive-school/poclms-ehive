import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 6rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary.main};
`;
