import React from 'react';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <br/>
          <MainContent />
        </div>
        
      </div>
    </div>
  );
}

export default App;
