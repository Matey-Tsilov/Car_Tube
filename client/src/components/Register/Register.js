const Register = () => {
    return(<section id="register">
    <div className="container">
      <form id="register-form">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <p>Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required=""
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required=""
        />
        <p>Repeat Password</p>
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
          required=""
        />
        <hr />
        <input type="submit" className="registerbtn" defaultValue="Register" />
      </form>
      <div className="signin">
        <p>
          Already have an account?
          <a href="/">Sign in</a>.
        </p>
      </div>
    </div>
  </section>)
}

export default Register