import React from 'react';
import TextField from '../textField/TextField';
import './headerStyle.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Name',
      title: 'Title',
      phone: 'Phone',
      email: 'Email',
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e, name) {
    this.setState({
      [name]: e,
    });
  }

  render() {
    return (
      <div className="container--header">
        <div className="header">
          <div className="header__name">
            <TextField
              value={this.state.name}
              setValue={this.changeValue}
              name={'name'}
            />
          </div>
          <div className="header__title">
            <TextField
              value={this.state.title}
              setValue={this.changeValue}
              name={'title'}
            />
          </div>
        </div>
        <div className="contact">
          <div className="contact__phone">
            <TextField
              value={this.state.phone}
              setValue={this.changeValue}
              name={'phone'}
            />
          </div>
          <div className="contact__email">
            <TextField
              value={this.state.email}
              setValue={this.changeValue}
              name={'email'}
            />
          </div>
        </div>
      </div>
    );
  }
}
