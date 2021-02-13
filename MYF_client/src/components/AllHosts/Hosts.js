import React from 'react';
import SearchBarWithFilters from './SearchBarWithFilters';

const Hosts = (props) => {
  return (
    <div id="pageRecherche">
      <SearchBarWithFilters
        farmTypeList={props.farmTypeList}
        activityTypesList={props.activityTypesList}
        spokenLanguagesList={props.spokenLanguagesList}
        certificationsList={props.certificationsList}
        publicTypesList={props.publicTypesList}
      />
    </div>
  );
};

export default Hosts;
