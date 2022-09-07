import React from 'react';
import uuid from 'react-uuid';
import './skillsStyle.css';
import TextField from '../textField/TextField';

export default class HardSkills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills-list">
        {this.props.skills.map((s) => {
          if (s !== null) {
            return (
              <div className="skill__entry" key={uuid()}>
                <TextField
                  value={s.text}
                  maxLength={20}
                  setValue={this.props.editSkill}
                  name={s.id}
                />
                <span
                  onClick={() => this.props.onDel(s.id)}
                  className="skill__del"
                >
                  X
                </span>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
