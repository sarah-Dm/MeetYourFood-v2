import React from 'react';

class StepFinal extends React.Component {
  //revenir au step précédent
  goBack = () => {
    if (this.props.userProfile === "product'host") {
      this.props.liftStates('step', 3);
    } else {
      this.props.liftStates('step', 2);
    }
  };

  render() {
    return (
      <div id="final_signup">
        <h3>Vérification de vos informations</h3>
        <ul>
          <li>
            <p>Type de profil</p>
            <p>{this.props.userProfile}</p>
          </li>
          <li>
            <p>Email</p>
            <p>{this.props.email}</p>
          </li>
          <li>
            <p>Mot de passe</p>
            <p>********</p>
          </li>
          <li>
            <p>Prénom</p>
            <p>{this.props.firstname}</p>
          </li>
          <li>
            <p>Nom</p>
            <p>{this.props.name}</p>
          </li>
          <li>
            <p>Nom d'utilisateur</p>
            <p>{this.props.username}</p>
          </li>
          <li>
            <p>Photo de profil</p>
            <p>{this.props.profilePic}</p>
          </li>
          <li>
            <p>Description</p>
            <p>{this.props.description}</p>
          </li>
          {this.props.userProfile === "product'host" && (
            <div>
              <li>
                <p>Nom de l'exploitation</p>
                <p>{this.props.farmName}</p>
              </li>
              <li>
                <p>Site internnet</p>
                <p>{this.props.website}</p>
              </li>
              <li>
                <p>Adresse</p>
                <p>{this.props.address}</p>
              </li>
              <li>
                <p>Code postal</p>
                <p>{this.props.zipCode}</p>
              </li>
              <li>
                <p>Ville</p>
                <p>{this.props.city}</p>
              </li>
              <li>
                <p>Type d'exploitation</p>
                <div>
                  {this.props.farmType.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </div>
              </li>
              <li>
                <p>Activités disponibles</p>
                <div>
                  {this.props.activitiesType.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </div>
              </li>
              <li>
                <p>Certifications</p>
                <div>
                  {this.props.certifications.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </div>
              </li>
              <li>
                <p>Public</p>
                <div>
                  {this.props.public.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </div>
              </li>
              <li>
                <p>Jours d'ouverture</p>
                <div>
                  {this.props.openingDays.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </div>
              </li>
              <li>
                <p>Heures d'ouverture</p>
                <p>{this.props.openingHoursStart}</p>
              </li>
              <li>
                <p>Heures de fermeture</p>
                <p>{this.props.openingHoursEnd}</p>
              </li>
              <li>
                <p>Langues parlées</p>
                <div>
                  {this.props.spokenLanguages.map((el, i) => (
                    <p key={i}>{el}</p>
                  ))}
                </div>
              </li>
              <li>
                <p>Photos</p>
                <p>{this.props.photos}</p>
              </li>
              <li>
                <p>Nombre maximum de visiteurs</p>
                <p>{this.props.maximumVisitors}</p>
              </li>
            </div>
          )}
        </ul>
        <div className="signup_buttons">
          <button className="btn primary" onClick={this.goBack}>
            Précédent
          </button>
          <button className="btn primary" onClick={this.props.submitForm}>
            Créer mon espace
          </button>
        </div>
      </div>
    );
  }
}

export default StepFinal;
