import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  // useEffect(()=>{
  //   console.log("EFFECT RUNNING "+
  //   "comp mounts also for every state update and every key stroke , after every render cycle ");
  // });

  
  // useEffect(()=>{
  //   console.log("EFFECT RUNNING comp mounts 123");
  // },[]);

  // useEffect(()=>{
  //   console.log("EFFECT RUNNING every time password chnages-------");
  // },[enteredPassword]);

  // useEffect(()=>{
  //   //RUNS ON LOAD OF PAGE AND RETURN RUNS BEFORE CONSOLE.LOG STATEMENT  EACH RENDER OF THE PAGE 
  //   console.log("CLEAN UP ---1");

  //   return ()=>{
  //     console.log("INSIDE CLEAN UP---1");
  //   };

  // },[enteredPassword]);

  // useEffect(()=>{
  //   console.log("CLEAN UP ---2");

  //   return ()=>{
  //     console.log("INSIDE CLEAN UP---2");
  //   };

  // },[]);

  useEffect(() => {
    const idetifier= setTimeout(() => {
      console.log('inside Identifier')
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
    }, 500);
    return() =>{
      console.log('CLEANUP')
      clearTimeout(idetifier);
    };
  }, [enteredEmail, enteredPassword]);

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
