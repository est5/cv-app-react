import React, { useState } from 'react';
import TextField from '../textField/TextField';
import './headerStyle.css';

function Header() {
  const [header, setHeader] = useState({
    name: 'Name',
    title: 'Title',
    phone: 'Phone',
    email: 'Email',
  });

  function changeValue(e, uuid = null, name) {
    setHeader({
      [name]: e,
    });
  }

  return (
    <div className="container--header">
      <div className="header">
        <div className="header__name">
          <TextField
            maxLength={20}
            value={header.name}
            setValue={changeValue}
            name={'name'}
          />
        </div>
        <div className="header__title">
          <TextField
            maxLength={20}
            value={header.title}
            setValue={changeValue}
            name={'title'}
          />
        </div>
      </div>
      <div className="contact">
        <div className="contact__phone">
          <TextField
            maxLength={20}
            value={header.phone}
            setValue={changeValue}
            name={'phone'}
          />
        </div>
        <div className="contact__email">
          <TextField
            maxLength={30}
            value={header.email}
            setValue={changeValue}
            name={'email'}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
