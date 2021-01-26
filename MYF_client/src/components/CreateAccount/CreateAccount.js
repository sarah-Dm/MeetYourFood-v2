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
    username: '',
    name: '',
    profilePic: '',
    description: '',
    farmName: '',
    website: '',
    address: '',
    zipCode: '',
    city: '',
    farmType: '',
    activitiesType: '',
    certifications: '',
    public: '',
    openingDays: '',
    openingHoursStart: '',
    openingHoursEnd: '',
    spokenLanguages: '',
    // photos: [], //["url", "url"]
    maximumVisitors: 0,
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
            {this.state.step === 1 && <StepOne liftStates={this.sendToDb} />}
            {/* différent selon profil ProductHost ou visitor */}
            {this.state.step === 2 && (
              <StepTwo
                liftStates={this.sendToDb}
                userProfile={this.state.userProfile}
                goBack={this.goBack}
              />
            )}
            {/* uniquement pour Host */}
            {this.state.step === 3 && <StepThree liftStates={this.sendToDb} />}
            {/* pour les 2 profils */}
            {this.state.step === 'last' && (
              <StepFinal
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
                // photos={this.state.photos}
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
