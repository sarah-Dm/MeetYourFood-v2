import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

const SearchResults = () => {
  const results = [
    {
      image:
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80',
      panierAv: 0,
      rating: 0,
      reviewsNum: 0,
      city: 'Bordeaux',
      name: 'La ferme',
      hostName: 'Mike',
      farmType: 'Apiculture',
    },
    {
      image:
        'https://images.unsplash.com/9/fields.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
      panierAv: 0,
      rating: 0,
      reviewsNum: 0,
      city: 'Grenoble',
      name: "L'élevage",
      hostName: 'Jean Pierre',
      farmType: 'Eleveur',
    },
  ];
  return (
    <div id="searchResults">
      <div>
        <p>
          <b>{results.length} RESULTS FOR YOU SEARCH</b>
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
        {results.map((result) => (
          <li>
            <a>
              <div
                className="recherche-image"
                style={{ backgroundImage: `url(${result.image})` }}
              >
                <p> {result.rating} </p>
                <p> {result.reviewsNum} reviews </p>
              </div>
              <p>
                <b>{result.name} </b> - Product'hôte : {result.hostName}
              </p>
              <p> {result.farmType} </p>
              <p> {result.city} </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
