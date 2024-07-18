import React from 'react';
import './App.css';
import LoginForm from './components/login-form';

function App() {
  return (
    <div className="App">
      <LoginForm
        submit={(data) => console.log('Login', data)}
        signup={() => console.log('Signup')}
        forgotPassword={() => console.log('Forgot Password')}
      />
    </div>
  );
}

export default App;
