import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.color.gray[400]};
  border-top: 1px solid ${({ theme }) => theme.color.primary.dark};
`;
