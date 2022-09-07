import React from 'react';

export default class PlusButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <i onClick={this.props.onClick} className="icon-plus add-entry"></i>;
  }
}
