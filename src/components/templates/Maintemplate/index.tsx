import {
  Content,
  Footer,
  Header,
  SidebarLeft,
  SidebarRight,
  StyledMainTemplate,
} from './styled';

export type MainTemplateProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return <StyledMainTemplate>{children}</StyledMainTemplate>;
};

MainTemplate.Header = Header;
MainTemplate.Content = Content;
MainTemplate.Footer = Footer;
MainTemplate.SidebarLeft = SidebarLeft;
MainTemplate.SidebarRight = SidebarRight;

export default MainTemplate;
