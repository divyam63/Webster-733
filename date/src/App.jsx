// src/App.js
import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsLogin(!isLogin)}>
      {isLogin ? "Go to Signup" : "Go to Login"}
      </button>
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default App;

