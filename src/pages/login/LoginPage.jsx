import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './LoginPage.scss';

export function LoginPage(){
  return(
    <div className='login'>
      <SignIn />
      <SignUp />
    </div>
  )
}