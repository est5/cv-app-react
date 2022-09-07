import React from 'react';
import uuid from 'react-uuid';
import PlusButton from '../Button';
import Education from '../cv-edu/Education';
import HardSkills from '../cv-hardSkills/HardSkills';
import './sidebarStyle.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [
        {
          schoolName: 'Hogwarts',
          title: 'Magistr',
          dateYear: '1995',
          id: uuid(),
        },
      ],
      skills: [{ text: 'React', id: uuid() }],
    };

    this.addSkill = this.addSkill.bind(this);
    this.createEmptyField = this.createEmptyField.bind(this);
    this.editSkill = this.editSkill.bind(this);
    this.delSkill = this.delSkill.bind(this);

    this.addEdu = this.addEdu.bind(this);
    this.createEmptyEduField = this.createEmptyEduField.bind(this);
    this.editEdu = this.editEdu.bind(this);
    this.delEdu = this.delEdu.bind(this);
  }

  addSkill(obj) {
    this.setState({
      skills: [...this.state.skills, obj],
    });
  }

  createEmptyField() {
    this.addSkill({ text: '...', id: uuid() });
  }

  editSkill(text, uid, name = 'text') {
    this.setState({
      skills: this.state.skills.map((skill) => {
        if (skill.id === uid) skill[name] = text;
        return skill;
      }),
    });
  }

  delSkill(uid) {
    const arr = this.state.skills.filter((skill) => skill.id !== uid);

    this.setState({
      skills: arr,
    });
  }

  addEdu(obj) {
    this.setState({
      education: [...this.state.education, obj],
    });
  }

  createEmptyEduField() {
    this.addEdu({
      schoolName: '...',
      dateYear: '...',
      title: '...',
      id: uuid(),
    });
  }

  editEdu(value, uid, field = '') {
    this.setState({
      education: this.state.education.map((edu) => {
        if (edu.id === uid) edu[field] = value;
        return edu;
      }),
    });
  }

  delEdu(uid) {
    const arr = this.state.education.filter((edu) => edu.id !== uid);

    this.setState({
      education: arr,
    });
  }

  render() {
    return (
      <div className="sidebar-container">
        <h3>
          Techincal skills <PlusButton onClick={this.createEmptyField} />
        </h3>
        <HardSkills
          skills={this.state.skills}
          editSkill={this.editSkill}
          onDel={this.delSkill}
        />
        <h3>
          Education <PlusButton onClick={this.createEmptyEduField} />
        </h3>
        <Education
          edu={this.state.education}
          editEdu={this.editEdu}
          onDel={this.delEdu}
        />
      </div>
    );
  }
}
