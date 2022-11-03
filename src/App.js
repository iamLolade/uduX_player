import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Siderbar';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';


function App() {

  return (
    <Container>
      <GlobalStyles />
      <Sidebar />
      <div style={{width: '82%'}}>
        <Header />
        <Main />
      </div>
    </Container>
  );
}

export default App;
