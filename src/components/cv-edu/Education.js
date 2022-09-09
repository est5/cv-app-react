import React from 'react';
import TextField from '../textField/TextField';
import './eduStyle.css';

function Education({ edu, editEdu, onDel }) {
  return (
    <section className="edu-list">
      {edu.map((education) => (
        <div className="edu-list__entry" key={education.id}>
          <div>
            <TextField
              name={'schoolName'}
              uuid={education.id}
              value={education.schoolName}
              setValue={editEdu}
              maxLength={20}
            />
            <TextField
              name={'dateYear'}
              uuid={education.id}
              value={education.dateYear}
              setValue={editEdu}
              maxLength={4}
            />
            <i
              className="skill__del icon-remove"
              onClick={() => onDel(education.id)}
            ></i>
          </div>
          <TextField
            name={'title'}
            uuid={education.id}
            value={education.title}
            setValue={editEdu}
            maxLength={20}
          />
        </div>
      ))}
    </section>
  );
}

export default Education;
