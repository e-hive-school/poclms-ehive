import styled from 'styled-components';

export const MainAreaContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background.light};
  padding: 0 1.4rem;
`;
