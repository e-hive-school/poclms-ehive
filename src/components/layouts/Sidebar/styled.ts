import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 8rem;
  height: 100%;

  padding: 2.4rem 0.4rem;
  gap: 2rem;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.secondary.dark};
`;

export const SidebarLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;
  padding: 0.4rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    margin-top: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  color: ${({ theme }) => theme.color.white};
  border-radius: 0.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.dark};
  }
`;
