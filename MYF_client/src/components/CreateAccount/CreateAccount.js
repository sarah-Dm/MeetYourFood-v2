import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

class CreateAccount extends React.Component {
  state = { step: 1, userProfile: '', email: '', password: '' };

  sendToDb = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  handleSubmit = () => {
    console.log('submitted');
  };

  render() {
    return (
      <div className="mainSignup">
        {/* afficher le step de signup selon l'étape (state step) auquel on est */}
        {this.state.step === 1 && <StepOne liftStates={this.sendToDb} />}
        {/* différent selon profil ProductHost ou visitor */}
        {this.state.step === 2 && <StepTwo liftStates={this.sendToDb} />}
        {/* uniquement pour Host */}
        {this.state.step === 3 && <StepThree submitForm={this.handleSubmit} />}
      </div>
    );
  }
}

export default CreateAccount;
