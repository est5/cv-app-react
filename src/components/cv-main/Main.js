import React, { useState } from 'react';
import uuid from 'react-uuid';
import Button from '../Button';
import TextField from '../textField/TextField';
import './mainStyle.css';

function Main() {
  const [projects, setProjects] = useState([
    {
      name: 'Resume Builder',
      title: 'CEO',
      description: 'React simple app, not responsive',
      date: '2022-2022',
      id: uuid(),
    },
  ]);

  function addProj(obj) {
    if (projects.length > 5) {
      return;
    }
    setProjects([...projects, obj]);
  }

  function delPrj(uid) {
    const arr = projects.filter((prj) => prj.id !== uid);

    setProjects(arr);
  }

  function createEmptyPrj() {
    addProj({
      name: 'Project/company name',
      title: 'title',
      description: 'key points',
      date: 'date-date',
      id: uuid(),
    });
  }

  function editPrj(value, uid, field = '') {
    setProjects(
      projects.map((prj) => {
        if (prj.id === uid) prj[field] = value;
        return prj;
      })
    );
  }

  return (
    <div className="main-container">
      <h3>
        Experience <Button onClick={createEmptyPrj} />
      </h3>
      <section className="projects">
        {projects.map((prj) => (
          <div className="projects__entry" key={prj.id}>
            <div className="projects__name">
              <TextField
                maxLength={15}
                value={prj.name}
                name={'name'}
                uuid={prj.id}
                setValue={editPrj}
              />
            </div>
            <div className="projects__title">
              <TextField
                maxLength={15}
                value={prj.title}
                name={'title'}
                uuid={prj.id}
                setValue={editPrj}
              />
            </div>
            <div className="projects__description">
              <TextField
                maxLength={50}
                value={prj.description}
                name={'description'}
                uuid={prj.id}
                setValue={editPrj}
              />
            </div>
            <div className="projects__date">
              <TextField
                maxLength={15}
                value={prj.date}
                name={'date'}
                uuid={prj.id}
                setValue={editPrj}
              />
            </div>
            <i
              className="skill__del icon-remove"
              onClick={() => delPrj(prj.id)}
            ></i>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Main;
