import React from 'react';
import Header from './components/cv-header/Header';
import Main from './components/cv-main/Main';
import Sidebar from './components/cv-sidebar/Sidebar';

function App() {
  return (
    <>
      <section className="info">
        <div>Click on fields to edit</div>
        <a href="https://github.com/est5" target="_blank" rel="noreferrer">
          <i className="icon-github"></i>est5
        </a>
      </section>
      <div className="container">
        <Header />
        <section className="main-section">
          <Sidebar />
          <Main />
        </section>
      </div>
    </>
  );
}

export default App;
