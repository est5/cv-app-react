import React from 'react';
import uuid from 'react-uuid';
import './skillsStyle.css';
import TextField from '../textField/TextField';

function HardSkills({ skills, editSkill, onDel }) {
  return (
    <section className="skills-list">
      {skills.map((s) => {
        if (s !== null) {
          return (
            <div className="skill__entry" key={uuid()}>
              <TextField
                value={s.text}
                maxLength={20}
                setValue={editSkill}
                name={'text'}
                uuid={s.id}
              />
              <i
                onClick={() => onDel(s.id)}
                className="skill__del icon-remove"
              ></i>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
}

export default HardSkills;
