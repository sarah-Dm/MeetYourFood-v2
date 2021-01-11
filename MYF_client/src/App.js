import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

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
      </div>
    );
  }
}

export default App;
