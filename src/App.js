import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Siderbar';


function App() {

  const layout = {
    display: 'flex',
    marginRight: 'auto'
  }

  return (
    <main style={layout}>
       <Sidebar />
       <div style={{width: '82%'}}>
        <Header /> 
       </div>
    </main>
  );
}

export default App;
