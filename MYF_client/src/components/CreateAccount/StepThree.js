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
    activityTypes: this.props.activityTypes,
    certifications: this.props.certifications,
    visitorType: this.props.visitorType,
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
      if (formerInputArr.includes(formerInput)) {
        return 'checked';
      } else {
        return ''; //pour que le check sente qu'il est controlé par React
      }
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
    this.props.liftStates('activityTypes', this.state.activityTypes);
    this.props.liftStates('certifications', this.state.certifications);
    this.props.liftStates('visitorType', this.state.visitorType);
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
          {this.props.farmTypeList.map((aFarmType, i) => (
            <div className="checkbox" key={i}>
              <div key={i}>
                <input
                  type="checkbox"
                  name="farmType"
                  value={aFarmType.value}
                  id={aFarmType.id}
                  onChange={this.handleChange}
                  checked={this.precheckBox('farmType', aFarmType.value)}
                />
                <label htmlFor={aFarmType.id}>{aFarmType.traduction}</label>
              </div>
            </div>
          ))}
        </fieldset>
        <fieldset>
          <legend>Activités disponible sur l'exploitation * </legend>
          {this.props.activityTypesList.map((anActivity, i) => (
            <div className="checkbox" key={i}>
              <input
                type="checkbox"
                name="activityTypes"
                value={anActivity.value}
                id={anActivity.id}
                onChange={this.handleChange}
                checked={this.precheckBox('activityTypes', anActivity.value)}
              />
              <label htmlFor={anActivity.id}>{anActivity.traduction}</label>
            </div>
          ))}
        </fieldset>
        <fieldset>
          <legend>Certifications</legend>
          {this.props.certificationsList.map((aCertification, i) => (
            <div className="checkbox" key={i}>
              <input
                type="checkbox"
                name="certifications"
                value={aCertification.value}
                id={aCertification.id}
                onChange={this.handleChange}
                checked={this.precheckBox(
                  'certifications',
                  aCertification.value
                )}
              />
              <label htmlFor={aCertification.id}>
                {aCertification.traduction}
              </label>
            </div>
          ))}
        </fieldset>
        <fieldset>
          <legend>Public</legend>
          {this.props.publicTypesList.map((aPublicType, i) => (
            <div className="checkbox" key={i}>
              <input
                type="checkbox"
                name="visitorType"
                value={aPublicType.value}
                id={aPublicType.id}
                onChange={this.handleChange}
                checked={this.precheckBox('visitorType', aPublicType.value)}
              />
              <label htmlFor={aPublicType.id}>{aPublicType.traduction}</label>
            </div>
          ))}
        </fieldset>
        <fieldset>
          <legend>Jours d'ouverture *</legend>
          {this.props.openingDaysList.map((aDay, i) => (
            <div className="checkbox" key={i}>
              <input
                type="checkbox"
                name="openingDays"
                value={aDay.value}
                id={aDay.id}
                onChange={this.handleChange}
                checked={this.precheckBox('openingDays', aDay.value)}
              />
              <label htmlFor={aDay.id}>{aDay.traduction}</label>
            </div>
          ))}
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
          {this.props.spokenLanguagesList.map((aSpokenLanguages, i) => (
            <div className="checkbox" key={i}>
              <input
                id={aSpokenLanguages.id}
                type="checkbox"
                name="spokenLanguages"
                value={aSpokenLanguages.value}
                onChange={this.handleChange}
                checked={this.precheckBox(
                  'spokenLanguages',
                  aSpokenLanguages.id
                )}
              />
              <label htmlFor={aSpokenLanguages.id}>
                {aSpokenLanguages.traduction}
              </label>
            </div>
          ))}
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
