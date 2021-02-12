import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';

class App extends React.Component {
  state = { userLogged: null };

  //à appeler dans le questionnaire login
  handleUpdateUser = (newUserId) => {
    this.setState({ userLogged: newUserId });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          userLogged={this.state.userLoggged}
          updateUser={this.handleUpdateUser}
        />
        <Switch>
          <Route
            exact={true}
            path="/create-account"
            component={CreateAccount}
          ></Route>
          <Route exact={true} path="/" component={Home}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
