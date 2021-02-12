import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  const nouveaux = [
    {
      nom: 'Le potager gourmand',
      image:
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      nom: 'Doux moutons',
      image:
        'https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      nom: 'Hauts Coteaux',
      image:
        'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      nom: 'Les rûches',
      image:
        'https://images.unsplash.com/photo-1602578291182-3e7563f272b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
    },
  ];

  const actuProducthote = [
    {
      nom: 'Miel',
      description:
        'Un apiculteur près de chez vous c’est un producteur de miels artisanaux en plein cœur de Paris et en Ile-de-France. Les apiculteurs sont basés dans le Parc Naturel du Gâtinais français, en lisière de la forêt de Fontainebleau. Rémy et Bruno y ont plus de 500 ruches. A Paris, leurs 85 ruches résident sur des toits d’entreprises ou d’institutions pour produire le fameux Miel de Paris. Ces ruches parisiennes ont donné l’idée à Rémy de créer le site www.miel-paris.com en 2008. La région de Fontainebleau est propice à l’apiculture en raison de sa diversité florale. On peut en effet y faire 3 récoltes successives sans transhumer les ruches. La profusion des fleurs en début de saison permet de récolter un miel de Printemps très parfumé. Immédiatement après, les milliers d’acacias éclosent pour le plus grand bonheur des abeilles. Au mois de juin, les nombreux châtaigniers fournissent à la fois du pollen et du miel de Châtaignier.',
      image:
        'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      nom: 'Chou',
      image:
        'https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      nom: 'Hauts Coteaux',
      image:
        'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      nom: 'Les rûches',
      image:
        'https://images.unsplash.com/photo-1602578291182-3e7563f272b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
    },
  ];
  return (
    <div className="homepage">
      <section id="page_accueil">
        <h2> Aventurez vous dans les coulisses de votre alimentation</h2>
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
          <button id="loupe_recherche" className="btn ">
            <FiSearch id="loupe-icon" size={40} />
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
        <div id="season">
          <h2>La saison des moissons</h2>
          <p></p>
        </div>
      </section>
      <section id="nouveaux_hotes">
        <div>
          <h2>Les petits nouveaux</h2>
          <ul>
            {nouveaux.map((unNouveau, i) => (
              <li key={i}>
                <Link to="#">
                  <img src={unNouveau.image} alt="farm"></img>
                  <h3>{unNouveau.nom}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn primary">Voir tous</button>
      </section>
      <section id="produits_moment">
        <h2>Les produits du moment</h2>
        <ul>
          {actuProducthote.map((uneActu, i) => (
            <li key={i}>
              <Link to="#">
                <img src={uneActu.image} alt="farm"></img>
                <div>
                  <h3>{uneActu.nom}</h3>
                  <p>{uneActu.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* EXEMPLES */}
      {/* A L'AFFICHE */}
    </div>
  );
};
export default Home;
