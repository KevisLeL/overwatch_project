import React, {useState} from 'react';

import './login.css';
import DATA from "../data";

const Login = props => {

  //const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let userLogged = null;

  const validateForm = () => {
    return (
        email.length > 0 && password.length > 0
    )
  };

  const findUser = function readData(email, password) {
    DATA.forEach(user => {
      if (user.email === email && user.password === password) {
        console.log('Login correcto');
        console.log(user);
        userLogged = user;
      }
    });
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    findUser(email, password);
    if (userLogged != null) {
      console.log(props.history);
      props.history.push({
        pathname: '/partidas',
        state: {user: userLogged}
      });
    } else {
      alert('Eres subnormal');
    }
  };

  const goToCreateUser = event => {
    event.preventDefault();

    props.history.push('/create-user');
  }

  return (
      <div className="login">
        <h2>LOGIN REQUIRED</h2>
        <div class="card">
          <div class="card-body">
            <form onSubmit={authSubmitHandler}>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                    value={email}
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="valid email address required"
                    onChange={event => setEmail(event.target.value)}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                    value={password}
                    type="password"
                    pattern=".{6,}"
                    title="6 characters min."
                    class="form-control"
                    id="password"
                    onChange={event => setPassword(event.target.value)}
                />
              </div>
              <button
                  type="submit"
                  disabled={!validateForm()}
                  class="btn btn-primary"
              >
                LOG IN
              </button>

              <button
                  type="button"
                  class="btn btn-outline-info"
                  onClick={event => goToCreateUser(event)}
              >
                CREATE USER
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;