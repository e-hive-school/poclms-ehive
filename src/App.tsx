import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Content from './components/layouts/MainArea';
import Sidebar from './components/layouts/Sidebar';
import MainTemplate from './components/templates/Maintemplate';

function App() {
  return (
    <MainTemplate>
      <MainTemplate.Header>
        <Header />
      </MainTemplate.Header>
      <MainTemplate.SidebarLeft>
        <Sidebar />
      </MainTemplate.SidebarLeft>
      <MainTemplate.Content>
        <Content />
      </MainTemplate.Content>
      {/* <MainTemplate.SidebarRight>
        <Sidebar>Sidebar on Right</Sidebar>
      </MainTemplate.SidebarRight> */}
      <MainTemplate.Footer>
        <Footer />
      </MainTemplate.Footer>
    </MainTemplate>
  );
}

export default App;
