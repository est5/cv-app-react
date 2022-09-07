import React from 'react';
import uuid from 'react-uuid';
import Button from '../Button';
import TextField from '../textField/TextField';
import './mainStyle.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'Resume Builder',
          title: 'CEO',
          description: 'React simple app, not responsive',
          date: '2022-2022',
          id: uuid(),
        },
      ],
    };

    this.addProj = this.addProj.bind(this);
    this.createEmptyPrj = this.createEmptyPrj.bind(this);
    this.delPrj = this.delPrj.bind(this);
    this.editPrj = this.editPrj.bind(this);
  }

  addProj(obj) {
    if (this.state.projects.length > 5) {
      return;
    }
    this.setState({
      projects: [...this.state.projects, obj],
    });
  }

  delPrj(uid) {
    const arr = this.state.projects.filter((prj) => prj.id !== uid);

    this.setState({
      projects: arr,
    });
  }

  createEmptyPrj() {
    this.addProj({
      name: 'Project/company name',
      title: 'title',
      description: 'key points',
      date: 'date-date',
      id: uuid(),
    });
  }

  editPrj(value, uid, field = '') {
    this.setState({
      projects: this.state.projects.map((prj) => {
        if (prj.id === uid) prj[field] = value;
        return prj;
      }),
    });
  }

  render() {
    return (
      <div className="main-container">
        <h3>
          Experience <Button onClick={this.createEmptyPrj} />
        </h3>
        <section className="projects">
          {this.state.projects.map((prj) => (
            <div className="projects__entry">
              <div className="projects__name">
                <TextField
                  maxLength={15}
                  value={prj.name}
                  name={'name'}
                  uuid={prj.id}
                  setValue={this.editPrj}
                />
              </div>
              <div className="projects__title">
                <TextField
                  maxLength={15}
                  value={prj.title}
                  name={'title'}
                  uuid={prj.id}
                  setValue={this.editPrj}
                />
              </div>
              <div className="projects__description">
                <TextField
                  maxLength={30}
                  value={prj.description}
                  name={'description'}
                  uuid={prj.id}
                  setValue={this.editPrj}
                />
              </div>
              <div className="projects__date">
                <TextField
                  maxLength={15}
                  value={prj.date}
                  name={'date'}
                  uuid={prj.id}
                  setValue={this.editPrj}
                />
              </div>
              <i
                className="skill__del icon-remove"
                onClick={() => this.delPrj(prj.id)}
              ></i>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
