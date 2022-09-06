import React from 'react';
import InlineEdit from '../InlineEdit';
import './headerStyle.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'ilya buyankov',
      title: 'Front End Developer',
      address: 'address',
      phone: 'phone',
      email: 'email',
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  }

  render() {
    return (
      <div className="container--header">
        <div className="header">
          <div class="header__name">
            <InlineEdit
              value={'Ilya Buyankov'}
              setValue={this.changeValue}
              name={'name'}
              maxLength={'30'}
            />
          </div>
          <div class="header__title">
            <InlineEdit
              value={'Front End Developer'}
              setValue={this.changeValue}
              name={'title'}
            />
          </div>
        </div>
        <div className="contact">
          <div className="contact__address">
            <InlineEdit
              value={'address'}
              setValue={this.changeValue}
              name={'name'}
            />
          </div>
          <p className="contact__phone">
            <InlineEdit
              value={'phone'}
              setValue={this.changeValue}
              name={'phone'}
            />
          </p>
          <p className="contact__email">
            <InlineEdit
              value={'email'}
              setValue={this.changeValue}
              name={'email'}
            />
          </p>
        </div>
      </div>
    );
  }
}
