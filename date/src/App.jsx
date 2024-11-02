// src/App.js
import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
   
      <div className="App">
      
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={() => setIsLogin(!isLogin)} className='border-solid border-2 border-orange-500 rounded-md'>
      {isLogin ? "Go to Signup" : "Go to Login"}
      </button>
    </div>
  
  );
}

export default App;

