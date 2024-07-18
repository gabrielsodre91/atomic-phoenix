import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';
import { TextField, Button } from '@mui/material';

interface LoginFormProps {
  submit: (data: LoginFormData) => void;
  signup?: () => void;
  forgotPassword?: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ submit, signup, forgotPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translate3d(0, -40px, 0)',
  }));

  useEffect(() => {
    set({
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)',
    });
  }, [set]);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log('Login', data);

    submit(data);
  };

  return (
    <animated.div
      style={props}
      className='flex justify-center items-center h-screen'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full space-y-6'
      >
        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Login
        </Button>
        <div className='mt-4 w-full flex flex-row justify-between align-center'>
          <span className='text-blue-500 cursor-pointer' onClick={signup}>
            Sign up
          </span>
          <span className='text-blue-500 cursor-pointer' onClick={forgotPassword}>
            Forgot password
          </span>
        </div>
      </form>
    </animated.div>
  );
};

export default LoginForm;
