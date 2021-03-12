import React from 'react';
import SearchBarWithFilters from './SearchBarWithFilters';
import SearchResults from './SearchResults';
import search from '../route-service';
import queryString from 'query-string';

class Hosts extends React.Component {
  state = {
    hostsList: [],
    location: this.props.location,
    day: this.props.day,
    visitor: this.props.visitor,
    certificationsFilters: [],
    activityTypeFilters: [],
    farmTypeFilters: [],
    publicTypesFilters: [],
    spokenLanguagesFilters: [],
  };

  componentDidMount() {
    this.searchInDb();
  }

  //dès qu'un state change, recherche en db
  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      this.searchInDb();
      if (prevState.day !== this.state.day) {
        this.props.updateDay(this.state.day);
      }
    } else {
      console.log('prevState and state are the same');
    }
  }

  sendToParent = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  searchInDb = (event) => {
    if (event) event.preventDefault();
    //créer la query en front dans l'url
    const query = queryString.stringify({
      location: this.state.location,
      openingDays: this.state.day,
      maximumVisitors: this.state.visitor,
      certifications: this.state.certificationsFilters,
      farmType: this.state.farmTypeFilters,
      activitiesType: this.state.activityTypeFilters,
      public: this.state.publicTypesFilters,
      spokenLanguages: this.state.spokenLanguagesFilters,
    });
    //envoyer l'url dans la route
    search(`/api/search?${query}`)
      .then((res) => {
        this.setState({
          hostsList: res.data,
        });
      })
      .catch((err) => console.log('err', err));
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
          liftStates={this.sendToParent}
          searchInDb={this.searchInDb}
          //pour affichage des filtres passés en Home
          day={this.props.day}
          location={this.props.location}
          visitor={this.props.visitor}
        />
        <SearchResults
          hostsList={this.state.hostsList}
          farmTypeList={this.props.farmTypeList}
        />
      </div>
    );
  }
}

export default Hosts;
