import React from 'react';
import SearchBarWithFilters from './SearchBarWithFilters';
import SearchResults from './SearchResults';
import search from '../route-service';
import queryString from 'query-string';

class Hosts extends React.Component {
  state = {
    hostsList: [],
    location: '',
    day: '',
    visitor: 1,
    certificationsFilters: [],
    activityTypeFilters: [],
    farmTypeFilters: [],
    publicTypesFilters: [],
    spokenLanguagesFilters: [],
  };

  componentDidMount() {
    this.searchInDb();
  }

  //dès qu'un state, change recherche en db
  componentDidUpdate(prevState) {
    console.log(
      'prevState',
      prevState,
      'this.state',
      this.state,
      'test',
      prevState !== this.state
    );
    // if (prevState !== this.state) {
    //   this.searchInDb();
    // }
  }

  sendToParent = (stateName, value) => {
    console.log(stateName, value);
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
        />
        <SearchResults hostsList={this.state.hostsList} />
      </div>
    );
  }
}

export default Hosts;
