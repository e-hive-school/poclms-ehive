import styled from 'styled-components';
import { MainTemplateProps } from '.';

export const StyledMainTemplate = styled.div<MainTemplateProps>`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'sidebarLeft'
    'sidebarRight'
    'footer';
  grid-template-rows: auto 1fr auto;

  @media only screen and (min-width: 768px) {
    grid-template-areas:
      'header header header'
      'sidebarLeft content sidebarRight'
      'footer footer footer';
    grid-template-columns: auto minmax(300px, 1fr) auto;
  }

  background-color: ${({ theme }) => theme.color.primary.light};

  height: 100%;
  width: 100vw;
  min-height: 100vh;
`;

export const Header = styled.div`
  grid-area: header;
`;
export const Content = styled.div`
  grid-area: content;
`;
export const Footer = styled.div`
  grid-area: footer;
`;
export const SidebarLeft = styled.div`
  grid-area: sidebarLeft;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: fit-content;
    padding-left: 0;
  }
`;
export const SidebarRight = styled.div`
  grid-area: sidebarRight;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: fit-content;
    padding-left: 0;
  }
`;
