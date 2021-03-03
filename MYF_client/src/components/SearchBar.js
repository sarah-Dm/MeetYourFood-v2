import React from 'react';
import { FiSearch } from 'react-icons/fi';

class SearchBar extends React.Component {
  state = { location: '', day: '', visitor: 1 };

  handleChange = (event) => {
    const value = event.target.value;
    const state = event.target.name;
    this.setState({ [state]: value });
  };

  liftStates = (event) => {
    event.preventDefault();
    this.props.liftStates('location', this.state.location);
    this.props.liftStates('day', this.state.day);
    this.props.liftStates('visitor', this.state.visitor);
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
        <button
          id="loupe_recherche"
          className="btn"
          onClick={(this.liftStates, (event) => this.props.searchInDb())}
        >
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
