import React from 'react';
import service from '../route-service';

class StepOne extends React.Component {
  state = {
    step: 1,
    userProfile: '',
    email: '',
    password: '',
    passwordMatch: '',
    emailIsAvailable: true,
    errorMessage: 'Cet email est déjà utilisé',
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

  //vérifier que l'email n'existe pas déjà
  emailIsAvailable = () => {
    const email = this.state.email;
    const url = `/api/checkEmailAvailable/${email}`;
    service
      .get(url)
      .then((res) => {
        console.log('email is available');
        this.setState({ emailIsAvailable: true });
      })
      .catch((err) => console.log('err', err));
  };

  //envoyer les states de ce step dans le component signup principal
  liftToMainForm = () => {
    // this.emailIsAvailable();
    //si l'email est disponible (emailIsAvailable())
    // if (this.state.emailIsAvailable) {
    this.props.liftStates('userProfile', this.state.userProfile);
    this.props.liftStates('email', this.state.email);
    this.props.liftStates('password', this.state.password);
    this.props.liftStates('step', this.state.step + 1);
    // } else {
    //   console.log('email indisponible');
    // }
  };

  render() {
    return (
      <div>
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
              <option value="none" id="host-option" className="profileOptions">
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
    );
  }
}

export default StepOne;
