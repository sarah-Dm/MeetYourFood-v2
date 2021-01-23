import React from 'react';

class StepThree extends React.Component {
  state = { step: 3 };

  render() {
    return (
      <div>
        StepThree
        <button onClick={this.props.submitForm}>Créer mon compte</button>
      </div>
    );
  }
}

export default StepThree;
