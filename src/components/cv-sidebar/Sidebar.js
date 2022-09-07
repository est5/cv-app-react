import React from 'react';
import uuid from 'react-uuid';
import PlusButton from '../Button';
import HardSkills from '../cv-hardSkills/HardSkills';
import './sidebarStyle.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [],
      skills: [{ text: 'React', id: uuid() }],
    };

    this.addSkill = this.addSkill.bind(this);
    this.createEmptyField = this.createEmptyField.bind(this);
    this.editSkill = this.editSkill.bind(this);
    this.delSkill = this.delSkill.bind(this);
  }

  addSkill(obj) {
    this.setState({
      skills: [...this.state.skills, obj],
    });
  }

  createEmptyField() {
    this.addSkill({ text: '...', id: uuid() });
  }

  editSkill(text, uid) {
    this.setState({
      skills: this.state.skills.map((skill) => {
        if (skill.id === uid) skill.text = text;
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

  render() {
    return (
      <div className="sidebar-container">
        <h3>
          Techincal skills <PlusButton onClick={this.createEmptyField} />
        </h3>
        <HardSkills
          skills={this.state.skills}
          addSkill={this.addSkill}
          editSkill={this.editSkill}
          onDel={this.delSkill}
        />
        <h3>
          Education <PlusButton />
        </h3>
      </div>
    );
  }
}
