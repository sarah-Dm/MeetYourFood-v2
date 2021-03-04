import React from 'react';
import { FiSearch } from 'react-icons/fi';
import search from './route-service';
import queryString from 'query-string';

class SearchBar extends React.Component {
  state = { location: '', day: '', visitor: 1 };

  handleChange = (event) => {
    const value = event.target.value;
    const state = event.target.name;
    this.setState({ [state]: value });
  };

  liftStates = (event) => {
    event.preventDefault();
    //d'abord envoyer les states dans le parent
    this.props.liftStates('location', this.state.location);
    this.props.liftStates('day', this.state.day);
    this.props.liftStates('visitor', this.state.visitor);
    //puis lancer la recherche en base
    console.log('event', event);
    //créer la query en front dans l'url
    const query = queryString.stringify({
      location: this.state.location,
      openingDays: this.state.day,
      maximumVisitors: this.state.visitor,
    });
    //envoyer l'url dans la route
    console.log('query', query);
    search(`/api/search?${query}`)
      .then((res) => {
        console.log('hostsList', res.data);
        this.props.liftStates('hostsList', res.data);
      })
      .catch((err) => console.log('err', err));
  };

  render() {
    return (
      <form className="formulaire-recherche">
        <div id="fields">
          <section className="form-field" id="demande_lieu">
            <label>
              LIEU
              <input
                type="text"
                placeholder="Where are you ?"
                name="location"
                required
                value={this.state.location}
                onChange={this.handleChange}
              />
            </label>
          </section>
          <section className="form-field" id="demande_date_arrivee">
            <label>
              JOUR DE LA VISITE
              <select name="day" onChange={this.handleChange}>
                <option value="">Any</option>
                {this.props.openingDaysList.map((openingDay) => {
                  return (
                    <option value={openingDay.value} key={openingDay.value}>
                      {openingDay.traduction}
                    </option>
                  );
                })}
              </select>
            </label>
          </section>
          <section className="form-field" id="demande_visiteurs">
            <label>
              NOMBRE DE VISITEURS
              <input
                type="number"
                name="visitor"
                onChange={this.handleChange}
              />
            </label>
          </section>
        </div>
        <button id="loupe_recherche" className="btn" onClick={this.liftStates}>
          <FiSearch id="loupe-icon" size={40} />
        </button>
      </form>
    );
    /* mobile view */
    //   <form id="formulaire-recherche-mobile" action="">
    //     {/* à supprimer quand view normale avec le .js */}
    //     <img id="loupe-icon-mobile" src="../images/loupe-icon.png" alt="loupe" />
    //     <input type="text" placeholder="Où allez-vous ?" />
    //   </form>;
  }
}

export default SearchBar;
