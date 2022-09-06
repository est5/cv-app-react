import React from 'react';
import Header from './components/cv-header/Header';
import Main from './components/cv-main/Main';
import Sidebar from './components/cv-sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <section className="main-section">
          <Sidebar />
          <Main />
        </section>
      </div>
    );
  }
}

export default App;
