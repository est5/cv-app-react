import React from 'react';
import './sidebarStyle.css';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <h3>
          Techincal skills <button className="add-entry">Add</button>
        </h3>
        <h3>
          Education <button className="add-entry">Add</button>
        </h3>
      </div>
    );
  }
}
