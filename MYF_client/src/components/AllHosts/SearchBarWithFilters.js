import React from 'react';
import SearchBar from '../SearchBar';

const SearchBarWithFilters = (props) => {
  return (
    <div className="searchbar">
      <SearchBar />
      <section id="filtres">
        <select name="certification" id="">
          <option value="">Certifications</option>
          {props.certificationsList.map((aCertification, i) => (
            <option
              key={i}
              class="capitalize"
              value={aCertification.value}
              name={aCertification.value}
            >
              {aCertification.traduction}
            </option>
          ))}
        </select>
        <select name="activityType" id="">
          <option value="">Activity type</option>
          {props.activityTypesList.map((anActivity, i) => (
            <option
              key={i}
              class="capitalize"
              value={anActivity.value}
              name={anActivity.value}
            >
              {anActivity.traduction}
            </option>
          ))}
        </select>
        <select name="farmType" id="">
          <option value="">Farm type</option>
          {props.farmTypeList.map((aFarmType, i) => (
            <option
              key={i}
              class="capitalize"
              value={aFarmType.value}
              name={aFarmType.value}
            >
              {aFarmType.traduction}
            </option>
          ))}
        </select>
        <select name="public" id="">
          <option value="">Public</option>
          {props.publicTypesList.map((aPublicType, i) => (
            <option
              class="capitalize"
              value={aPublicType.value}
              name={aPublicType.value}
            >
              {aPublicType.traduction}
            </option>
          ))}
        </select>
        <select name="language" id="">
          <option value="">Language</option>
          {props.spokenLanguagesList.map((aLanguage, i) => (
            <option
              class="capitalize"
              value={aLanguage.value}
              name={aLanguage.value}
            >
              {aLanguage.traduction}
            </option>
          ))}
        </select>
      </section>
    </div>
  );
};

export default SearchBarWithFilters;
