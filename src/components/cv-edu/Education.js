import React from 'react';
import TextField from '../textField/TextField';
import './eduStyle.css';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="edu-list">
        {this.props.edu.map((education) => (
          <div className="edu-list__entry" key={education.id}>
            <div>
              <TextField
                name={'schoolName'}
                uuid={education.id}
                value={education.schoolName}
                setValue={this.props.editEdu}
                maxLength={20}
              />
              <TextField
                name={'dateYear'}
                uuid={education.id}
                value={education.dateYear}
                setValue={this.props.editEdu}
                maxLength={4}
              />
              <i
                className="skill__del icon-remove"
                onClick={() => this.props.onDel(education.id)}
              ></i>
            </div>
            <TextField
              name={'title'}
              uuid={education.id}
              value={education.title}
              setValue={this.props.editEdu}
              maxLength={20}
            />
          </div>
        ))}
      </section>
    );
  }
}
