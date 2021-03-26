import React from 'react';
import service from './route-service';

class Login extends React.Component {
  state = { email: '', password: '' };

  login = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    service
      .post('/api/login', (email, password))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    this.setState({ [stateName]: stateValue });
  };

  render() {
    return (
      <div id="login">
        <form className="form create-account">
          <h2>LOGIN</h2>
          <label className="field">
            Email
            <div>
              <input
                type="email"
                name="email"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </label>
          <label className="field">
            Password
            <div>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </label>
          <button
            className="btn primary"
            onClick={(event) => this.login(event)}
          >
            Soumettre
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
