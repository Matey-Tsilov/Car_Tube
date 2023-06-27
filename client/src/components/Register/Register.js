import { useState } from "react";
import * as authService from '../../services/authSrvice'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    rePass: '',
  });

  const inputChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setInputs((i) => new Object({ ...i, ...change }));
  };

  const registerUser = (e) => {
    e.preventDefault();

    if (inputs.password !== inputs.rePass ) {
      return alert("Sorry, passwords mismatch!")
    }
   
    authService.register()
    .then(res => console.log(res))

  };


  return (
    <section id="register">
      <div className="container">
        <form id="register-form" onSubmit={registerUser}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <p>Username</p>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required=""
            onChange={inputChange}
            value={inputs.username}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required=""
            value={inputs.password}
            onChange={inputChange}
          />
          <p>Repeat Password</p>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPass"
            required=""
            value={inputs.rePass}
            onChange={inputChange}
          />
          <hr />
          <input
            type="submit"
            className="registerbtn"
            defaultValue="Register"
          />
        </form>
        <div className="signin">
          <p>
            Already have an account?
            <a href="/">Sign in</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
