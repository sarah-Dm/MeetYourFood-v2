import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header className="header-layout">
        <h1 id="logo">
          <a href="/" alt="MeetYourFood">
            MeetYourFood 🥕
          </a>
        </h1>
        <nav>
          <ul id="links">
            <li>
              <Link
                className="boutons_hover"
                to={
                  '/hosts'
                }
              >
                Meet our hosts
              </Link>
            </li>
            <li>
              <Link className="boutons_hover" to={'/create-account?host=1'}>
                Become a host
              </Link>
            </li>
          </ul>
          <div id="account-block">
            <ul id="mon_compte">
              {this.props.userLogged ? (
                <Link to={`/profile/${this.props.userLogged}`}>
                  <i className="far fa-user-circle"></i>
                </Link>
              ) : (
                <Link to={'/login'}>
                  <i className={'far fa-user-circle'}></i>
                </Link>
              )}
              <div id="account-links">
                {this.props.userLogged ? (
                  <li id="login-btn">
                    <Link to={'/logout'}> Logout</Link>
                  </li>
                ) : (
                  <li id="login-btn">
                    <Link to={'/login'}>Login</Link>
                  </li>
                )}
                <li id="create-account">
                  <Link to={'/create-account'}>Create an account</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
