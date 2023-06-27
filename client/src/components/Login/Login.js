import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as authApi from "../../services/authSrvice";
import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const logInSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: inputs.username.trim(),
      password: inputs.password.trim()
    }

    authApi.login(payload)
    .then((res) => {
      setUser(res)
      navigate('/cars')
    })
    .catch(err => alert(err.message))
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
