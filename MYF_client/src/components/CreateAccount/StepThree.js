import React from 'react';
import service from '../route-service';

class StepThree extends React.Component {
  state = {
    step: 3,
    farmName: this.props.farmName,
    description: this.props.description,
    website: this.props.website,
    address: this.props.address,
    zipCode: this.props.zipCode,
    city: this.props.city,
    farmType: this.props.farmType,
    activitiesType: this.props.activitiesType,
    certifications: this.props.certifications,
    public: this.props.public,
    openingDays: this.props.openingDays,
    openingHoursStart: this.props.openingHoursStart,
    openingHoursEnd: this.props.openingHoursEnd,
    spokenLanguages: this.props.spokenLanguages,
    photos: [], //["url", "url"]
    maximumVisitors: this.props.maximumVisitors,
  };

  //récupérer les inputs et les mettre dans les states
  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    if (event.target.type === 'checkbox') {
      let stateArr = this.state[stateName];

      //pb avec spoken languages, la stateArr arrive trop tard
      if (stateArr) {
        if (event.target.checked) {
          stateArr.push(stateValue);
          this.setState({ [stateName]: stateArr });
        } else {
          let indexToRemove = stateArr.indexOf(stateValue);
          stateArr.splice(indexToRemove, 1);
          this.setState({ [stateName]: stateArr });
        }
      } else console.log('stateArr missing');
    } else {
      this.setState({ [stateName]: stateValue });
    }
  };

  //récupérer l'image
  handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('farmPic1', e.target.files[0]);
    uploadData.append('farmPic2', e.target.files[1]);
    uploadData.append('farmPic3', e.target.files[2]);
    uploadData.append('farmPic4', e.target.files[3]);
    uploadData.append('farmPic5', e.target.files[4]);
    uploadData.append('farmPic6', e.target.files[5]);
    uploadData.append('farmPic7', e.target.files[6]);
    uploadData.append('farmPic8', e.target.files[7]);
    service
      .post('/api/multipleUpload', uploadData)
      .then((res) => {
        //créer un array avec les photos ajoutées par le user si elles existent (il peut y en avoir moins de 8)
        let newPhotos = [];
        for (let i = 0; i < 8; i++) {
          if (res.data[i]) {
            newPhotos.push(res.data[i]);
          }
        }
        console.log('newPhotos', newPhotos);
        this.setState({
          photos: newPhotos,
        });
        console.log('this.state.photos', this.state.photos);
      })
      .catch((err) => {
        console.log('Error while uploading the file: ', err);
      });
  };

  //revenir au step précédent
  goBack = () => {
    this.props.liftStates('step', this.state.step - 1);
  };

  //pour les checkbox, précocher les cases si elles avaient été séléctionnées
  precheckBox = (inputArr, formerInput) => {
    let formerInputArr = this.state[inputArr];
    if (formerInputArr) {
      if (formerInputArr.includes(formerInput)) return 'checked';
    }
  };

  //envoyer les states de ce step dans le component signup principal et finaliser l'inscription (quand userPorfile est product'host)
  endForm = () => {
    this.props.liftStates('step', 'last');
    this.props.liftStates('farmName', this.state.farmName);
    this.props.liftStates('description', this.state.description);
    this.props.liftStates('website', this.state.website);
    this.props.liftStates('address', this.state.address);
    this.props.liftStates('zipCode', this.state.zipCode);
    this.props.liftStates('city', this.state.city);
    this.props.liftStates('farmType', this.state.farmType);
    this.props.liftStates('activitiesType', this.state.activitiesType);
    this.props.liftStates('certifications', this.state.certifications);
    this.props.liftStates('public', this.state.public);
    this.props.liftStates('openingDays', this.state.openingDays);
    this.props.liftStates('openingHoursStart', this.state.openingHoursStart);
    this.props.liftStates('openingHoursEnd', this.state.openingHoursEnd);
    this.props.liftStates('spokenLanguages', this.state.spokenLanguages);
    this.props.liftStates('photos', this.state.photos);
    this.props.liftStates('maximumVisitors', this.state.maximumVisitors);
  };

  render() {
    return (
      <div id="stepThree">
        <label className="field">
          Nom de la ferme *
          <input
            type="text"
            name="farmName"
            onChange={this.handleChange}
            value={this.state.farmName}
          />
        </label>
        <label className="field">
          Description *
          <textarea
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          ></textarea>
        </label>
        <label className="field">
          Site internet
          <input
            type="url"
            name="website"
            onChange={this.handleChange}
            value={this.state.website}
          />
        </label>
        <label className="field">
          Addresse *
          <textarea
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          ></textarea>
        </label>
        <label className="field">
          Code postal *
          <input
            type="text"
            name="zipCode"
            onChange={this.handleChange}
            value={this.state.zipCode}
          />
        </label>
        {/* TODO- faire une search avec recherche automatique de ville (GoogleMap) */}
        <label className="field">
          Ville *
          <select
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          >
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
              checked={this.precheckBox('farmType', 'poultry-farming')}
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
              checked={this.precheckBox('farmType', 'pig-farming')}
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
              checked={this.precheckBox('farmType', 'cow-farming')}
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
              checked={this.precheckBox('farmType', 'sheep-farming')}
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
              checked={this.precheckBox('farmType', 'market-gardener')}
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
              checked={this.precheckBox('farmType', 'viticulture')}
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
              checked={this.precheckBox('farmType', 'beekeeping')}
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
              checked={this.precheckBox('farmType', 'cheese-maker')}
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
              checked={this.precheckBox('farmType', 'dairy-maker')}
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
              checked={this.precheckBox('activitiesType', 'tasting')}
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
              checked={this.precheckBox('activitiesType', 'direct-selling')}
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
              checked={this.precheckBox('activitiesType', 'workshops')}
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
              checked={this.precheckBox('activitiesType', 'self-tour')}
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
              checked={this.precheckBox('activitiesType', 'guided-tour')}
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
              checked={this.precheckBox('certifications', 'bio')}
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
              checked={this.precheckBox('certifications', 'AOP')}
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
              checked={this.precheckBox('certifications', 'AOC')}
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
              checked={this.precheckBox('certifications', 'HVE')}
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
              checked={this.precheckBox('certifications', 'RSE')}
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
              checked={this.precheckBox('certifications', 'biodynamic')}
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
              checked={this.precheckBox('public', 'children')}
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
              checked={this.precheckBox('public', 'seniors')}
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
              checked={this.precheckBox('public', 'disabled')}
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
              checked={this.precheckBox('openingDays', 'monday')}
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
              checked={this.precheckBox('openingDays', 'tuesday')}
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
              checked={this.precheckBox('openingDays', 'wednesday')}
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
              checked={this.precheckBox('openingDays', 'thursday')}
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
              checked={this.precheckBox('openingDays', 'friday')}
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
              checked={this.precheckBox('openingDays', 'saturday')}
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
              checked={this.precheckBox('openingDays', 'sunday')}
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
              checked={this.precheckBox('spokenLanguages', 'french')}
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
              checked={this.precheckBox('spokenLanguages', 'english')}
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
              checked={this.precheckBox('spokenLanguages', 'spanish')}
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
              checked={this.precheckBox('spokenLanguages', 'german')}
            />
            <label htmlFor="german">Allemand</label>
          </div>
        </fieldset>
        <label className="field">
          Photos de l'exploitation *
          <input
            type="file"
            name="photos"
            multiple
            onChange={this.handleFileUpload}
            className="upload"
          />
        </label>
        <label className="field">
          Nombre maximum de visiteurs *
          <input
            type="text"
            name="maximumVisitors"
            onChange={this.handleChange}
            value={this.state.maximumVisitors}
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
