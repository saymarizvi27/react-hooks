import React, { useState, useEffect, useReducer ,useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from '../../store/auth-context';

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    ((state, action) => {
      if (action.type === "USER_INPUT") {
        console.log("action",action.val);
        return { value: action.val, isValid: action.val.includes("@") };
      }
      if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
      }
      return { value: "", isValid: false };
    }),
    { value: "", isValid: null }
  );


  const [passwordState, dispatchPassword] = useReducer(
    ((state, action) => {
      if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
      }
      if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
      }
      return { value: "", isValid: false };
    }),
    { value: "", isValid: null }
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const idetifier = setTimeout(() => {
      console.log('inside Identifier')
      setFormIsValid(emailIsValid && emailIsValid);
    }, 500);
    return () => {
      console.log('CLEANUP')
      clearTimeout(idetifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.valid === false ? classes.invalid : ""
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.valid === false ? classes.invalid : ""
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordState.value}
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
