import { Link } from "react-router-dom";
import * as authApi from "../../services/authSrvice";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: null,
    password: null,
  });

  const logInSubmit = (e) => {
    e.preventDefault();
    authApi.login(inputs);
  };

  const loginFormHandler = (e) => {
    const change = { [e.target.name]: e.target.value };
    setInputs((inp) => new Object({ ...inp, ...change }));
  };

  return (
    <section id="login">
      <div className="container">
        <form id="login-form" onSubmit={logInSubmit}>
          <h1>Login</h1>
          <p>Please enter your credentials.</p>
          <hr />
          <p>Username</p>
          <input
            placeholder="Enter Username"
            name="username"
            type="text"
            onChange={loginFormHandler}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={loginFormHandler}
          />
          <input type="submit" className="registerbtn" defaultValue="Login" />
        </form>
        <div className="signin">
          <p>
            Dont have an account?
            <Link to="/user/register">Sign up</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
