import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

class Navbar extends React.Component {
  // componentDidUpdate(prevState, prevProps) {
  //   if (prevProps !== this.props) {
  //     console.log('prevProps', prevProps, 'this.props', this.props);
  //   }
  // }
  render() {
    console.log('this.props.userLogged', this.props.userLogged);

    return (
      <header className="header-layout">
        <button onClick={this.props.logoutButton}>Logout</button>
        <h1 id="logo">
          <a href="/" alt="MeetYourFood">
            MeetYourFood 🥕
          </a>
        </h1>
        <nav>
          <ul id="links">
            <li>
              <Link className="boutons_hover" to={'/hosts'}>
                Les Product’hôtes
              </Link>
            </li>
            <li>
              <Link className="boutons_hover" to={'/create-account?host=1'}>
                Devenir Product’hôte
              </Link>
            </li>
          </ul>
          <div id="account-block">
            <ul id="mon_compte">
              {this.props.userLogged ? (
                <Link to={`/profile/${this.props.userLogged}`}>
                  <VscAccount className="far fa-user-circle" />
                </Link>
              ) : (
                <Link to={'/login'}>
                  <VscAccount className={'far fa-user-circle'} />
                </Link>
              )}
              <div id="account-links">
                {this.props.userLogged ? (
                  <li id="login-btn">
                    <Link to={'/logout'}> Se déconnecter</Link>
                  </li>
                ) : (
                  <li id="login-btn">
                    <Link to={'/login'}>Mon compte</Link>
                  </li>
                )}
                <li id="create-account">
                  <Link to={'/create-account'}>S’inscrire</Link>
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
