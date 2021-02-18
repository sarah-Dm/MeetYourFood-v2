import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = (props) => {
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
            />
          </label>
        </section>
        <section className="form-field" id="demande_date_arrivee">
          <label>
            JOUR DE LA VISITE
            <select name="day">
              <option value="">Any</option>
              {props.openingDaysList.map((openingDay) => {
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
            <input type="number" name="visitor" />
          </label>
        </section>
      </div>
      <button id="loupe_recherche" className="btn ">
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
};

export default SearchBar;
