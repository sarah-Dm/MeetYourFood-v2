import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFinal from './StepFinal';

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
    activitiesType: [],
    certifications: [],
    public: [],
    openingDays: [],
    openingHoursStart: '',
    openingHoursEnd: '',
    spokenLanguages: [],
    // photos: [], //["url", "url"]
    maximumVisitors: 0,
    errorMessage: '',
  };

  sendToDb = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  handleSubmit = () => {
    console.log('submitted');
  };

  render() {
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
                activitiesType={this.state.activitiesType}
                certifications={this.state.certifications}
                public={this.state.public}
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
                farmType={this.state.farmType}
                activitiesType={this.state.activitiesType}
                certifications={this.state.certifications}
                public={this.state.public}
                openingDays={this.state.openingDays}
                openingHoursStart={this.state.openingHoursStart}
                openingHoursEnd={this.state.openingHoursEnd}
                spokenLanguages={this.state.spokenLanguages}
                photos={this.state.photos}
                maximumVisitors={this.state.maximumVisitors}
              />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default CreateAccount;
