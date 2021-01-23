import React from 'react';

class StepTwo extends React.Component {
  state = { step: 2 };

  //récupérer les inputs et les mettre dans les states
  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    this.setState({ [stateName]: stateValue });
  };

  //envoyer les states de ce step dans le component signup principal
  liftToMainForm = () => {
    this.props.liftStates('step', this.state.step + 1);
  };

  render() {
    return (
      <div>
        StepTwo
        <button onClick={this.liftToMainForm}>Suivant</button>
      </div>
    );
  }
}

export default StepTwo;
