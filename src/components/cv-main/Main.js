import React from 'react';
import Button from '../Button';
import './mainStyle.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h3>
          Projects <Button />
        </h3>
      </div>
    );
  }
}
