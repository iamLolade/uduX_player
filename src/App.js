import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Siderbar';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import IsMobile from './utils/IsMobile';


function App() {
  const isMobile = IsMobile()

  const style = {
    width: isMobile ? '100%' : '82%',
  }

  return (
    <Container>
      <GlobalStyles />
      {!isMobile && <Sidebar />}
      <div style={style}>
        <Header />
        <Main />
      </div>
    </Container>
  );
}

export default App;
