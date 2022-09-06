import React from 'react';
import InlineEdit from '../InlineEdit';
import './headerStyle.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'name',
      title: 'title',
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
              value={'Name'}
              setValue={this.changeValue}
              name={'name'}
            />
          </div>
          <div class="header__title">
            <InlineEdit
              value={'Title'}
              setValue={this.changeValue}
              name={'title'}
            />
          </div>
        </div>
        <div className="contact">
          <div className="contact__address">
            <InlineEdit
              value={'Address'}
              setValue={this.changeValue}
              name={'name'}
            />
          </div>
          <p className="contact__phone">
            <InlineEdit
              value={'Phone'}
              setValue={this.changeValue}
              name={'phone'}
            />
          </p>
          <p className="contact__email">
            <InlineEdit
              value={'Email'}
              setValue={this.changeValue}
              name={'email'}
            />
          </p>
        </div>
      </div>
    );
  }
}
