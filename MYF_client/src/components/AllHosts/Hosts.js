import React from 'react';
import SearchBarWithFilters from './SearchBarWithFilters';
import SearchResults from './SearchResults';

class Hosts extends React.Component {
  state = {
    location: '',
    day: '',
    visitor: 1,
    certificationsFilters: [],
    activityTypeFilters: [],
    farmTypeFilters: [],
    publicTypesFilters: [],
    spokenLanguagesFilters: [],
  };

  sendToDb = (stateName, value) => {
    this.setState({ [stateName]: value });
    //envoyer les states dans la route
    //récupérer les documents qui répondent à la query
  };

  render() {
    return (
      <div id="pageRecherche">
        <SearchBarWithFilters
          farmTypeList={this.props.farmTypeList}
          activityTypesList={this.props.activityTypesList}
          spokenLanguagesList={this.props.spokenLanguagesList}
          certificationsList={this.props.certificationsList}
          publicTypesList={this.props.publicTypesList}
          openingDaysList={this.props.openingDaysList}
          liftStates={this.sendToDb}
        />
        <SearchResults />
      </div>
    );
  }
}

export default Hosts;
