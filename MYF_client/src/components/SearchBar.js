import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <form className="formulaire-recherche">
      <div id="fields">
        <section className="form-field" id="demande_lieu">
          <label>
            LOCATION
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
            DAY OF YOUR VISIT
            <select name="day">
              <option value="">Any</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </label>
        </section>
        <section className="form-field" id="demande_visiteurs">
          <label>
            NUMBER OF VISITORS
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
