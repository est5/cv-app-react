import React, { useState } from 'react';
import uuid from 'react-uuid';
import PlusButton from '../Button';
import Education from '../cv-edu/Education';
import HardSkills from '../cv-hardSkills/HardSkills';
import './sidebarStyle.css';

function Sidebar() {
  const [education, setEducation] = useState([
    {
      schoolName: 'Hogwarts',
      title: 'Magistr',
      dateYear: '1995',
      id: uuid(),
    },
  ]);

  const [skills, setSkills] = useState([{ text: 'React', id: uuid() }]);

  function addSkill(obj) {
    if (skills.length > 10) {
      return;
    }
    setSkills([...skills, obj]);
  }

  function createEmptyField() {
    addSkill({ text: '...', id: uuid() });
  }

  function editSkill(text, uid, name = 'text') {
    setSkills(
      skills.map((skill) => {
        if (skill.id === uid) skill[name] = text;
        return skill;
      })
    );
  }

  function delSkill(uid) {
    const arr = skills.filter((skill) => skill.id !== uid);

    setSkills(arr);
  }

  function addEdu(obj) {
    if (education.length > 5) {
      return;
    }
    setEducation([...education, obj]);
  }

  function createEmptyEduField() {
    addEdu({
      schoolName: 'school name',
      dateYear: 'year',
      title: 'title',
      id: uuid(),
    });
  }

  function editEdu(value, uid, field = '') {
    setEducation(
      education.map((edu) => {
        if (edu.id === uid) edu[field] = value;
        return edu;
      })
    );
  }

  function delEdu(uid) {
    const arr = education.filter((edu) => edu.id !== uid);

    setEducation(arr);
  }

  return (
    <div className="sidebar-container">
      <h3>
        Techincal skills <PlusButton onClick={createEmptyField} />
      </h3>
      <HardSkills skills={skills} editSkill={editSkill} onDel={delSkill} />
      <h3>
        Education <PlusButton onClick={createEmptyEduField} />
      </h3>
      <Education edu={education} editEdu={editEdu} onDel={delEdu} />
    </div>
  );
}

export default Sidebar;
