import React, { Component } from 'react';
import { LoginInput } from './components/login-input/login-input.component.jsx';
import { PasswordInput } from './components/password-input/password-input.component.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Login page Test</p>
          <LoginInput />
          <PasswordInput />
          <button class='button'>Login</button>
        </header>
      </div>
    );
  }
}

export default App;
