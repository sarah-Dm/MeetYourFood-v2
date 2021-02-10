import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFinal from './StepFinal';
import { createAccount } from '../route-service';

class CreateAccount extends React.Component {
  state = {
    step: 1,
    userProfile: '',
    email: '',
    password: '',
    firstname: '',
    name: '',
    username: '',
    profilePic: '',
    description: '',
    farmName: '',
    website: '',
    address: '',
    zipCode: '',
    city: '',
    farmType: [],
    activityTypes: [],
    certifications: [],
    visitorType: [],
    openingDays: [],
    openingHoursStart: '',
    openingHoursEnd: '',
    spokenLanguages: [],
    photos: [], //["url", "url"]
    maximumVisitors: 0,
    errorMessage: '',
    successMessage: '',
  };

  sendToDb = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    const {
      userProfile,
      email,
      password,
      firstname,
      name,
      username,
      profilePic,
      description,
      farmName,
      website,
      address,
      zipCode,
      city,
      farmType,
      activityTypes,
      certifications,
      visitorType,
      openingDays,
      openingHoursStart,
      openingHoursEnd,
      spokenLanguages,
      photos,
      maximumVisitors,
    } = this.state;

    createAccount(
      userProfile,
      email,
      password,
      firstname,
      username,
      name,
      profilePic,
      description,
      farmName,
      website,
      address,
      zipCode,
      city,
      farmType,
      activityTypes,
      certifications,
      visitorType,
      openingDays,
      openingHoursStart,
      openingHoursEnd,
      spokenLanguages,
      photos,
      maximumVisitors
    )
      .then((res) => {
        console.log('is setStepFinal');
        this.setState({ successMessage: 'Votre compte a été créé', step: '' });
      })
      .catch((err) => console.log(err));
  };

  render() {
    //pour afficher le label dans le step final et non les values en BDD
    const valueToLabel = {
      'poultry-farming': 'Elevage de volailles',
      'pig-farming': 'Elevage porcin',
      'cow-farming': 'Elevage bovin',
      'sheep-farming': 'Elevage de moutons',
      'market-gardener': 'Maraichage',
      viticulture: 'Viticulture',
      beekeeping: 'Apiculture',
      'cheese-maker': 'Production de fromage',
      'dairy-maker': 'Production de lait',
      tasting: 'Dégustation',
      'direct-selling': 'Vente directe',
      workshops: 'Ateliers',
      'self-tour': 'Visite autonome',
      'guided-tour': 'Visite guidée',
      bio: 'Bio',
      AOP: 'AOP',
      AOC: 'AOC',
      HVE: 'HVE',
      RSE: 'RSE',
      biodynamic: 'Biodynamic',
      children: 'Enfants',
      seniors: 'Seniors',
      disabled: 'Accès aux personnes handicapés',
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thurday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      french: 'français',
      english: 'anglais',
      spanish: 'espagnol',
      german: 'allemand',
    };
    const farmTypeLabelArr = this.state.farmType.map(
      (farmType) => valueToLabel[farmType]
    );
    const activityTypesLabelArr = this.state.activityTypes.map(
      (activityType) => valueToLabel[activityType]
    );
    const certificationsLabelArr = this.state.certifications.map(
      (certification) => valueToLabel[certification]
    );
    const visitorTypeLabelArr = this.state.visitorType.map(
      (visitorType) => valueToLabel[visitorType]
    );
    const openingDaysLabelArr = this.state.openingDays.map(
      (openingDay) => valueToLabel[openingDay]
    );
    const spokenLanguagesLabelArr = this.state.spokenLanguages.map(
      (spokenLanguage) => valueToLabel[spokenLanguage]
    );

    return (
      // afficher le step de signup selon l'étape (state step) auquel on est
      <div className="mainSignup">
        <main className="content">
          <div className="form create-account">
            {this.state.step === 1 && (
              <StepOne
                liftStates={this.sendToDb}
                userProfile={this.state.userProfile}
                email={this.state.email}
                password={this.state.password}
              />
            )}
            {/* différent selon profil ProductHost ou visitor */}
            {this.state.step === 2 && (
              <StepTwo
                liftStates={this.sendToDb}
                userProfile={this.state.userProfile}
                goBack={this.goBack}
                firstname={this.state.firstname}
                name={this.state.name}
                username={this.state.username}
                profilePic={this.state.profilePic}
                description={this.state.description}
              />
            )}
            {/* uniquement pour Host */}
            {this.state.step === 3 && (
              <StepThree
                liftStates={this.sendToDb}
                farmName={this.state.farmName}
                description={this.state.description}
                website={this.state.website}
                address={this.state.address}
                zipCode={this.state.zipCode}
                city={this.state.city}
                farmType={this.state.farmType}
                activityTypes={this.state.activityTypes}
                certifications={this.state.certifications}
                visitorType={this.state.visitorType}
                openingDays={this.state.openingDays}
                spokenLanguages={this.state.spokenLanguages}
                openingHoursStart={this.state.openingHoursStart}
                openingHoursEnd={this.state.openingHoursEnd}
                maximumVisitors={this.state.maximumVisitors}
              />
            )}
            {/* pour les 2 profils */}
            {this.state.step === 'last' && (
              <StepFinal
                liftStates={this.sendToDb}
                submitForm={this.handleSubmit}
                userProfile={this.state.userProfile}
                email={this.state.email}
                password={this.state.password}
                firstname={this.state.firstname}
                username={this.state.username}
                name={this.state.name}
                profilePic={this.state.profilePic}
                description={this.state.description}
                farmName={this.state.farmName}
                website={this.state.website}
                address={this.state.address}
                zipCode={this.state.zipCode}
                city={this.state.city}
                farmType={farmTypeLabelArr}
                activityTypes={activityTypesLabelArr}
                certifications={certificationsLabelArr}
                visitorType={visitorTypeLabelArr}
                openingDays={openingDaysLabelArr}
                openingHoursStart={this.state.openingHoursStart}
                openingHoursEnd={this.state.openingHoursEnd}
                spokenLanguages={spokenLanguagesLabelArr}
                photos={this.state.photos}
                maximumVisitors={this.state.maximumVisitors}
              />
            )}
            {this.state.successMessage && (
              <div>
                <h3>{this.state.successMessage}</h3>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default CreateAccount;
