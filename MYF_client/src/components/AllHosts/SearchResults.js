import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

const SearchResults = (props) => {
  const resultats = props.hostsList.resultats;
  if (!resultats)
    return (
      <div>
        <h2>En chargement</h2>
      </div>
    );
  if (resultats.length > 0) {
    console.log('resultats', resultats);

    return (
      <div id="searchResults">
        <div id="searchHeader">
          <p>
            <b>{resultats.length} RESULTATS POUR VOTRE RECHERCHE</b>
          </p>
          <div>
            <button>
              <AiOutlineUnorderedList size={55} />
            </button>
            <button>
              <BiMap size={55} />
            </button>
          </div>
        </div>
        <ul id="listeResultats">
          {resultats.map((aHost) => (
            <li key={aHost._id}>
              <a>
                <div
                  className="recherche-image"
                  style={{ backgroundImage: `url(${aHost.photos[0]})` }}
                >
                  <p> {aHost.rating} </p>
                  <p> {aHost.reviewsNum} reviews </p>
                </div>
                <p>
                  <b>{aHost.name} </b> - Product'hôte : {aHost.hostName}
                </p>
                <p> {aHost.farmType} </p>
                <p> {aHost.city} </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <div>ICI</div>;
};

export default SearchResults;
