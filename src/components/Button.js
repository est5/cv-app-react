import React from 'react';

function PlusButton(props) {
  return <i onClick={props.onClick} className="icon-plus add-entry"></i>;
}

export default PlusButton;
