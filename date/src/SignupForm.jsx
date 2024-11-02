
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const signupSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    history.push('/login');

  };

  return (
    <div className="signup flex ">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Signup</h2>
      <div>
        <label>Username</label>
        <input {...register("username")} />
        {errors.username && <p className='text-red-900'>{errors.username.message}</p>}
      </div>
      <div className=''>
        <label>Email</label>
        <input {...register("email")} className='ml-10'/>
        {errors.email && <p className='text-red-900'>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p className='text-red-900'>{errors.password.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignupForm;
