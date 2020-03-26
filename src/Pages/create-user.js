import React, { useState } from 'react';


import './login.css';


const CreateUser = props => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confPassword, setConfPassword] = useState('');
const [name, setName] = useState('');
const [support, setSupport] = useState('');
const [dps, setDPS] = useState('');
const [tank, setTank] = useState('');


    const createUserHandler = event => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(confPassword);
    console.log(name);
    console.log(support);
    console.log(dps);
    console.log(tank);
    props.history.push('/partidas');
      
    };

    const formValidity = () => {
        return(
          email.length > 0 && password.length > 0 && name.length > 0 && password === confPassword
        )
      };

    return (
        <React.Fragment>
        <div className="login">
        <h2>CREATE NEW USER</h2>
        <div class="card">
          <div class="card-body">
            <form onSubmit={createUserHandler} id="CuForm">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  value={email}
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
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
                  class="form-control"
                  id="password"
                  onChange={event => setPassword(event.target.value)}
                />
                </div>
                <div class="form-group">
                <label for="password">Confirm Password</label>
                <input
                  value={confPassword}
                  type="password"
                  class="form-control"
                  id="confirmpassword"
                  errorText="The password no coincide chulo"
                  onChange={event => setConfPassword(event.target.value)}
                />
              </div>
              <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
                <input
                value={name}
                  type="text"
                  class="form-control"
                  id="name"
                  onChange={event => setName(event.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Prefered Function</label>
                <select class="form-control" id="RoleSelection">
                  <option>Support</option>
                  <option>DPS</option>
                  <option>Tank</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Prefered characters
                </label>
                <input class="form-control" id="Support" placeholder="Support" value={support} onChange={event => setSupport(event.target.value)}/>
                <input class="form-control" id="DPS" placeholder="DPS" value={dps} onChange={event => setDPS(event.target.value)}/>
                <input class="form-control" id="TANK" placeholder="TANK" value={tank} onChange={event => setTank(event.target.value)}/>
                <small id="emailHelp" class="form-text text-muted">
                  Please fill the gaps.
                </small>
              </div>
              <button
                type="submit"
                disabled={!formValidity()}
                class="btn btn-primary"
              >
                CREATE USER
              </button>
            </form>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
};

export default CreateUser;