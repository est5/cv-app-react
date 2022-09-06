import React from 'react';
import './mainStyle.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h3>
          Projects <button className="add-entry">Add</button>
        </h3>
      </div>
    );
  }
}
