import React from 'react';
import service from '../route-service';

class StepTwo extends React.Component {
  state = {
    step: 2,
    firstname: this.props.firstname,
    username: this.props.username,
    name: this.props.name,
    profilePic: '',
    description: this.props.description,
  };

  //récupérer les inputs et les mettre dans les states
  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    this.setState({ [stateName]: stateValue });
  };

  //récupérer l'image
  handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('profilePic', e.target.files[0]);
    service
      .post('/api/singleUpload', uploadData)
      .then((res) =>
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ profilePic: res.data.secure_url })
      )
      .catch((err) => {
        console.log('Error while uploading the file: ', err);
      });
  };

  //revenir au step précédent
  goBack = () => {
    this.props.liftStates('step', this.state.step - 1);
  };

  //envoyer les states de ce step dans le component signup principal et passer au step suivant
  liftToMainForm = () => {
    this.props.liftStates('step', this.state.step + 1);
    this.props.liftStates('firstname', this.state.firstname);
    this.props.liftStates('name', this.state.name);
    this.props.liftStates('username', this.state.username);
    this.props.liftStates('profilePic', this.state.profilePic);
  };

  //envoyer les states de ce step dans le component signup principal et finaliser l'inscription (quand userPorfile est product'host)
  endForm = () => {
    this.props.liftStates('step', 'last');
    this.props.liftStates('firstname', this.state.firstname);
    this.props.liftStates('name', this.state.name);
    this.props.liftStates('username', this.state.username);
    this.props.liftStates('profilePic', this.state.profilePic);
    this.props.liftStates('description', this.state.description);
  };

  render() {
    return (
      <div>
        <h2>CREER UN COMPTE</h2>
        {/* error message */}
        <form id="createAccountForm">
          <label className="field">
            Prénom *
            <input
              type="text"
              name="firstname"
              required
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </label>
          <label className="field">
            Nom *
            <input
              type="text"
              name="name"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label className="field">
            Nom d'utilisateur *
            <input
              type="text"
              name="username"
              required
              onChange={this.handleChange}
              value={this.state.username}
            />
          </label>
          <label className="field">
            Photo de profil *
            <input
              type="file"
              name="profilePic"
              required
              onChange={this.handleFileUpload}
            />
          </label>
          {/* Si userProfile est un visiteur, terminer le formulaire (pas de step+1) */}
          {this.props.userProfile === 'visitor' && (
            <div>
              <label className="field description">
                Description *
                <input
                  type="text"
                  name="description"
                  required
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </label>
              <button className="btn primary" onClick={this.goBack}>
                Précédent
              </button>
              <button className="btn primary" onClick={this.endForm}>
                Finaliser l'inscription
              </button>
            </div>
          )}
          {/* Si userProfile est un product'host, passer au step suivant */}
          {this.props.userProfile === "product'host" && (
            <div className="signup_buttons">
              <button className="btn primary" onClick={this.goBack}>
                Précédent
              </button>
              <button className="btn primary" onClick={this.liftToMainForm}>
                Suivant
              </button>
            </div>
          )}
          <p className="mandatory">* CHAMPS REQUIS</p>
        </form>
      </div>
    );
  }
}

export default StepTwo;
