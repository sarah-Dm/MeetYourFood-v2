import React from 'react';

class StepOne extends React.Component {
  state = {
    step: 1,
    userProfile: '',
    email: '',
    password: '',
    passwordMatch: '',
  };

  //récupérer les inputs et les mettre dans les states
  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    //si les mots de passe ne sont pas identiques, alors indiquer une erreur
    if (stateName === 'passwordCheck') {
      if (this.state.password !== stateValue) {
        this.setState({ passwordMatch: false });
      } else {
        this.setState({ passwordMatch: true });
      }
    } else {
      this.setState({ [stateName]: stateValue });
    }
  };

  //envoyer les states de ce step dans le component signup principal
  liftToMainForm = () => {
    this.props.liftStates('userProfile', this.state.userProfile);
    this.props.liftStates('email', this.state.email);
    this.props.liftStates('password', this.state.password);
    this.props.liftStates('step', this.state.step + 1);
  };

  render() {
    return (
      <main className="content">
        <div className="form create-account">
          <h1>CREER UN COMPTE</h1>
          {/* error message */}
          <form id="createAccountForm">
            <label className="field">
              Quel type d'utilisateur êtes-vous ?
              <select
                name="userProfile"
                id="profileSelection"
                onChange={this.handleChange}
              >
                <option
                  value="product'host"
                  id="host-option"
                  className="profileOptions"
                >
                  Product'Hôte
                </option>
                <option
                  value="visitor"
                  id="visitor-option"
                  className="profileOptions"
                >
                  Visiteur
                </option>
              </select>
            </label>
            <div id="user-form">
              <label className="field">
                Email *
                <input
                  type="email"
                  name="email"
                  required
                  onChange={this.handleChange}
                />
              </label>
              <label className="field">
                Mot de passe *
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  required
                  onChange={this.handleChange}
                />
              </label>
              <label className="field">
                Confirmation du mot de passe *
                <input
                  type="password"
                  name="passwordCheck"
                  placeholder="**********"
                  required
                  onChange={this.handleChange}
                />
                {this.state.passwordMatch ? '✅' : '❌'}
              </label>
            </div>
            <button className="btn primary" onClick={this.liftToMainForm}>
              Suivant
            </button>
            <p className="mandatory">* CHAMPS REQUIS</p>
          </form>
        </div>
      </main>
    );
  }
}

export default StepOne;
