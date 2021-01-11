import React from 'react';

const Home = () => {
  return (
    <main className="content homepage">
      <div className="homepage">
        <section id="page_accueil">
          <section id="slogan">
            <h2>FIND A HOST, AND MEET YOUR FOOD 🥕 </h2>
            <p>Adventure yourself into the backstage of your food</p>
          </section>
          <form className="formulaire-recherche" action="/hosts" method="GET">
            {/* à supprimer quand view mobile avec le .js */}
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
            <button id="loupe_recherche">
              <img id="loupe-icon" src="../images/loupe-icon.png" alt="loupe" />
            </button>
          </form>
          {/* mobile view */}
          <form id="formulaire-recherche-mobile" action="">
            {/* à supprimer quand view normale avec le .js */}
            <img
              id="loupe-icon-mobile"
              src="../images/loupe-icon.png"
              alt="loupe"
            />
            <input type="text" placeholder="Où allez-vous ?" />
          </form>
          {/* EXEMPLES */}
          {/* A L'AFFICHE */}
        </section>
      </div>
      <h1> hello MeetYourFood</h1>
      <Navbar />
    </main>
  );
};
export default Home;
