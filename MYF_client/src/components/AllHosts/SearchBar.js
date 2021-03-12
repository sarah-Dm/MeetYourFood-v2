import React from 'react';
import { FiSearch } from 'react-icons/fi';

class SearchBar extends React.Component {
  state = {
    location: this.props.location,
    day: this.props.day,
    visitor: this.props.visitor,
  };

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

  showDayLabel = () => {
    let dayIndex;
    let dayShowed = 'Tous';
    //entrer dans this.props.openingDaysList et chercher l'index donc el.id est la valeur this.props.day
    this.props.openingDaysList.map((el) => {
      if (el.id === this.props.day) {
        dayIndex = this.props.openingDaysList.indexOf(el);
        //afficher la .traduction de l'el qui porte cet index
        dayShowed = this.props.openingDaysList[dayIndex].traduction;
      }
    });
    return dayShowed;
  };

  render() {
    console.log(this.state.day);
    return (
      <form className="formulaire-recherche">
        <div id="fields">
          <section className="form-field" id="demande_lieu">
            <label>
              LIEU
              <input
                type="text"
                placeholder="Où vous trouvez-vous ?"
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
                <option value={this.state.day}>{this.showDayLabel()}</option>
                {this.props.openingDaysList.map((openingDay) => {
                  return (
                    <option value={openingDay.value} key={openingDay.value}>
                      🗓 {openingDay.traduction}
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
                value={this.state.visitor}
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
