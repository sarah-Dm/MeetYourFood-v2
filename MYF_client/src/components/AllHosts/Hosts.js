import React from 'react';
import SearchBarWithFilters from './SearchBarWithFilters';
import SearchResults from './SearchResults';

const Hosts = (props) => {
  return (
    <div id="pageRecherche">
      <SearchBarWithFilters
        farmTypeList={props.farmTypeList}
        activityTypesList={props.activityTypesList}
        spokenLanguagesList={props.spokenLanguagesList}
        certificationsList={props.certificationsList}
        publicTypesList={props.publicTypesList}
        openingDaysList={props.openingDaysList}
      />
      <SearchResults />
    </div>
  );
};

export default Hosts;
