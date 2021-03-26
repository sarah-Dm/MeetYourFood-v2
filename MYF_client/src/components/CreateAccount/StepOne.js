import React from 'react';
import service from '../route-service';

class StepOne extends React.Component {
  state = {
    step: 1,
    userProfile: this.props.userProfile,
    email: this.props.email,
    password: this.props.password,
    passwordMatch: '',
    emailIsAvailable: true,
    errorMessage: '',
  };

  //récupérer les inputs et les mettre dans les states
  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    this.setState({ errorMessage: '' });

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

  //vérifier que l'email n'existe pas déjà, si oui envoyer les state dans le signup principal
  emailIsAvailable = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const url = `/api/checkEmailAvailable/${email}`;
    service
      .get(url)
      .then((res) => {
        this.setState({ emailIsAvailable: true });
        if (this.state.passwordMatch) {
          this.liftToMainForm();
        } else {
          this.setState({ errorMessage: '❌ Passwords do not match' });
        }
      })
      .catch((err) => {
        console.log('err', err);
        this.setState({ emailIsAvailable: false });
        this.setState({ errorMessage: '❌ This email is already used' });
      });
  };

  render() {
    let errorColor;
    if (this.state.errorMessage) {
      errorColor = 'red';
    }
    return (
      <div>
        <h2>CREER UN COMPTE</h2>
        <div>
          <form id="createAccountForm">
            <label className="field">
              Quel type d'utilisateur êtes-vous ?
              <div>
                <select
                  name="userProfile"
                  id="profileSelection"
                  value={this.state.userProfile}
                  onChange={this.handleChange}
                >
                  <option
                    value="none"
                    id="host-option"
                    className="profileOptions"
                  >
                    Séléctionner votre profil utilisateur
                  </option>
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
              </div>
            </label>
            <label className="field">
              Email *
              <div>
                <input
                  style={{ color: errorColor }}
                  type="email"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </label>
            <label className="field">
              Mot de passe *
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </label>
            <label className="field">
              Confirmation du mot de passe *
              <div>
                <input
                  type="password"
                  name="passwordCheck"
                  placeholder="**********"
                  required
                  onChange={this.handleChange}
                />

                <em> {this.state.passwordMatch ? '✅' : '❌'}</em>
              </div>
            </label>
            <em> {this.state.errorMessage && this.state.errorMessage}</em>
            <div className="signup_buttons">
              <p className="mandatory">* CHAMPS REQUIS</p>
              <button className="btn primary" onClick={this.emailIsAvailable}>
                Suivant
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StepOne;
