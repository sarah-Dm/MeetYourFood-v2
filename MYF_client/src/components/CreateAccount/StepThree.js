import React from 'react';

class StepThree extends React.Component {
  state = {
    step: 3,
    farmName: '',
    description: '',
    website: '',
    address: '',
    zipCode: '',
    city: '',
    farmType: [],
    activitiesType: [],
    certifications: [],
    public: [],
    openingDays: [],
    openingHoursStart: '',
    openingHoursEnd: '',
    spokenLanguages: [],
    // photos: [], //["url", "url"]
    maximumVisitors: 0,
  };

  //récupérer les inputs et les mettre dans les states
  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    console.log(
      'event.target.type',
      event.target.type,
      'event.target.checked',
      event.target.checked
    );
    if (event.target.type === 'checkbox') {
      let stateArr = this.state[stateName];
      console.log('stateArr', stateArr);
      if (event.target.checked) {
        stateArr.push(stateValue);
        console.log('stateArr', stateArr);
        this.setState({ [stateName]: stateArr });
      } else {
        let indexToRemove = stateArr.indexOf(stateValue);
        stateArr.splice(indexToRemove, 1);
        console.log('stateArr', stateArr);
        this.setState({ [stateName]: stateArr });
      }
    } else {
      this.setState({ [stateName]: stateValue });
    }
  };

  handleSelect = () => {};

  //revenir au step précédent
  goBack = () => {
    this.props.liftStates('step', this.state.step - 1);
  };

  //envoyer les states de ce step dans le component signup principal et finaliser l'inscription (quand userPorfile est product'host)
  endForm = () => {
    this.props.liftStates('step', 'last');
    this.props.liftStates('farmName', this.state.farmName);
    this.props.liftStates('description', this.state.description);
    this.props.liftStates('website', this.state.website);
    this.props.liftStates('address', this.state.address);
    this.props.liftStates('zipCode', this.state.zipCode);
    this.props.liftStates('city', 'city');
    this.props.liftStates('farmType', this.state.farmType);
    this.props.liftStates('activitiesType', this.state.activitiesType);
    this.props.liftStates('certifications', this.state.certifications);
    this.props.liftStates('public', this.state.public);
    this.props.liftStates('openingDays', this.state.openingDays);
    this.props.liftStates('openingHoursStart', this.state.openingHoursStart);
    this.props.liftStates('openingHoursEnd', this.state.openingDays);
    this.props.liftStates('spokenLanguages', this.state.openingHoursStart);
    this.props.liftStates('photos', this.state.photos);
    this.props.liftStates('maximumVisitors', this.state.maximumVisitors);
  };

  render() {
    return (
      <div id="stepThree">
        <label className="field">
          Nom de la ferme *
          <input type="text" name="farmName" onChange={this.handleChange} />
        </label>
        <label className="field">
          Description *
          <textarea name="description" onChange={this.handleChange}></textarea>
        </label>
        <label className="field">
          Site internet
          <input type="url" name="website" onChange={this.handleChange} />
        </label>
        <label className="field">
          Addresse *
          <textarea name="address" onChange={this.handleChange}></textarea>
        </label>
        <label className="field">
          Code postal *
          <input type="text" name="zipCode" onChange={this.handleChange} />
        </label>
        {/* TODO- faire une search avec recherche automatique de ville (GoogleMap) */}
        <label className="field">
          Ville *
          <select name="city" onChange={this.handleChange}>
            <option value="none">Séléctionner votre ville</option>
            <option value="bergerac">Bergerac</option>
            <option value="compiegne">Compiègne</option>
            <option value="clermont-ferrand">Clermont-Ferrand</option>
          </select>
        </label>
        <fieldset>
          <legend>Type d'exploitation * </legend>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="poultry-farming"
              id="poultry"
              onChange={this.handleChange}
            />
            <label htmlFor="poultry">Elevage de volailles</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="pig-farming"
              id="pig"
              onChange={this.handleChange}
            />
            <label htmlFor="pig">Elevage porcin</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="cow-farming"
              id="cow"
              onChange={this.handleChange}
            />
            <label htmlFor="cow">Elevage bovin</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="sheep-farming"
              id="sheep"
              onChange={this.handleChange}
            />
            <label htmlFor="sheep">Elevage de moutons</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="market-gardener"
              id="market"
              onChange={this.handleChange}
            />
            <label htmlFor="market">Maraichage</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="viticulture"
              id="viticulture"
              onChange={this.handleChange}
            />
            <label htmlFor="viticulture">viticulture</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="beekeeping"
              id="beekeeping"
              onChange={this.handleChange}
            />
            <label htmlFor="beekeeping">Apiculture</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="cheese-maker"
              id="cheese"
              onChange={this.handleChange}
            />
            <label htmlFor="cheese">Production de fromage</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="farmType"
              value="dairy-maker"
              id="dairy"
              onChange={this.handleChange}
            />
            <label htmlFor="dairy">Production de lait</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Activités disponible sur l'exploitation * </legend>
          <div className="checkbox">
            <input
              type="checkbox"
              name="activitiesType"
              value="tasting"
              id="tasting"
              onChange={this.handleChange}
            />
            <label htmlFor="tasting">Dégustation</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="activitiesType"
              value="direct-selling"
              id="direct-selling"
              onChange={this.handleChange}
            />
            <label htmlFor="direct-selling">Vente directe</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="activitiesType"
              value="workshops"
              id="workshops"
              onChange={this.handleChange}
            />
            <label htmlFor="workshops">Ateliers</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="activitiesType"
              value="self-tour"
              id="self-tour"
              onChange={this.handleChange}
            />
            <label htmlFor="self-tour">Visite autonome</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="activitiesType"
              value="guided-tour"
              id="guided-tour"
              onChange={this.handleChange}
            />
            <label htmlFor="guided-tour">Visite guidée</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Certifications</legend>
          <div className="checkbox">
            <input
              type="checkbox"
              name="certifications"
              value="bio"
              id="bio"
              onChange={this.handleChange}
            />
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="certifications"
              value="AOP"
              id="aop"
              onChange={this.handleChange}
            />
            <label htmlFor="aop">AOP</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="certifications"
              value="AOC"
              id="aoc"
              onChange={this.handleChange}
            />
            <label htmlFor="aoc">AOC</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="certifications"
              value="HVE"
              id="hve"
              onChange={this.handleChange}
            />
            <label htmlFor="hve">HVE</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="certifications"
              value="RSE"
              id="rse"
              onChange={this.handleChange}
            />
            <label htmlFor="rse">RSE Agro</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="certifications"
              value="biodynamic"
              id="biodynamic"
              onChange={this.handleChange}
            />
            <label htmlFor="biodynamic">Biodynamique</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Public</legend>
          <div className="checkbox">
            <input
              type="checkbox"
              name="public"
              value="children"
              id="children"
              onChange={this.handleChange}
            />
            <label htmlFor="children">Enfants</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="public"
              value="seniors"
              id="seniors"
              onChange={this.handleChange}
            />
            <label htmlFor="seniors">Seniors</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="public"
              value="disabled"
              id="disabled"
              onChange={this.handleChange}
            />
            <label htmlFor="disabled">Accès handicapés</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Jours d'ouverture *</legend>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="monday"
              id="monday"
              onChange={this.handleChange}
            />
            <label htmlFor="monday">Lundi</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="tuesday"
              id="tuesday"
              onChange={this.handleChange}
            />
            <label htmlFor="tuesday">Mardi</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="wednesday"
              id="wednesday"
              onChange={this.handleChange}
            />
            <label htmlFor="wednesday">Mercredi</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="thursday"
              id="thursday"
              onChange={this.handleChange}
            />
            <label htmlFor="thursday">Jeudi</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="friday"
              id="friday"
              onChange={this.handleChange}
            />
            <label htmlFor="friday">Vendredi</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="saturday"
              id="saturday"
              onChange={this.handleChange}
            />
            <label htmlFor="saturday">Samedi</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="openingDays"
              value="sunday"
              id="sunday"
              onChange={this.handleChange}
            />
            <label htmlFor="sunday">Dimanche</label>
          </div>
        </fieldset>
        <label className="field">
          Heures d'ouverture *
          <div id="opening-hours">
            <input
              type="time"
              name="openingHoursStart"
              onChange={this.handleChange}
            />
            <input
              type="time"
              name="openingHoursEnd"
              onChange={this.handleChange}
            />
          </div>
        </label>
        <fieldset>
          <legend>Langues parlées *</legend>
          <div className="checkbox">
            <input
              id="french"
              type="checkbox"
              name="spokenLanguages"
              value="french"
              onChange={this.handleChange}
            />
            <label htmlFor="french">Français</label>
          </div>
          <div className="checkbox">
            <input
              id="english"
              type="checkbox"
              name="spokenLanguages"
              value="english"
              onChange={this.handleChange}
            />
            <label htmlFor="english">Anglais</label>
          </div>
          <div className="checkbox">
            <input
              id="spanish"
              type="checkbox"
              name="spokenLanguages"
              value="spanish"
              onChange={this.handleChange}
            />
            <label htmlFor="spanish">Espagnol</label>
          </div>
          <div className="checkbox">
            <input
              id="german"
              type="checkbox"
              name="spokenLanguages"
              value="german"
              onChange={this.handleChange}
            />
            <label htmlFor="german">Allemand</label>
          </div>
        </fieldset>
        <label className="field">
          Photos de l'exploitation *
          <input type="file" name="photos" multiple className="upload" />
        </label>
        <label className="field">
          Nombre maximum de visiteurs *
          <input
            type="text"
            name="maximumVisitors"
            onChange={this.handleChange}
          />
        </label>
        <div className="signup_buttons">
          <button className="btn primary" onClick={this.goBack}>
            Précédent
          </button>
          <button className="btn primary" onClick={this.endForm}>
            Suivant
          </button>
        </div>
      </div>
    );
  }
}

export default StepThree;
