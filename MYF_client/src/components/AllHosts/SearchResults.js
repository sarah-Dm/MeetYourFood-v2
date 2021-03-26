import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import EnChargement from '../EnChargement';

const SearchResults = (props) => {
  const resultats = props.hostsList.resultats;

  const showFarmTypeLabel = (farmType) => {
    let farmTypeIndex;
    let farmTypeShowed;
    //entrer dans this.props.openingDaysList et chercher l'index donc el.id est la valeur this.props.day
    props.farmTypeList.map((el) => {
      if (el.value === farmType) {
        farmTypeIndex = props.farmTypeList.indexOf(el);
        //afficher la .traduction de l'el qui porte cet index
        farmTypeShowed = props.farmTypeList[farmTypeIndex].traduction;
      }
      return '';
    });
    return farmTypeShowed;
  };

  if (!resultats) return <EnChargement />;
  if (resultats.length < 1)
    return (
      <div>
        <h2>Pas de résultat</h2>
      </div>
    );
  if (resultats.length > 0) {
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
              <Link to={`/profile/${aHost.userDetails}/public`}>
                <div
                  className="recherche-image"
                  style={{ backgroundImage: `url(${aHost.photos[0]})` }}
                >
                  {/* TODO: fonction pour calculer moyenne des ratings */}
                  <p>{aHost.reviews && aHost.calculateAvRating}</p>
                  <p> {aHost.reviews && aHost.reviews.length} reviews </p>
                </div>
                <p>
                  <b style={{ textTransform: 'uppercase' }}>{aHost.farmName}</b>
                </p>
                <ul id="hostsList">
                  {aHost.farmType.map((aFarmType) => {
                    return (
                      <li key={aFarmType}>{showFarmTypeLabel(aFarmType)},</li>
                    );
                  })}
                </ul>
                <p style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>
                  {aHost.location}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default SearchResults;
