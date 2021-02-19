import React from 'react';
import SearchBar from '../SearchBar';

class SearchBarWithFilters extends React.Component {
  state = {
    certificationsFilters: [],
    activityTypeFilters: [],
    farmTypeFilters: [],
    publicTypesFilters: [],
    spokenLanguagesFilters: [],
  };

  handleChange = (event) => {
    const stateName = event.target.name;
    const stateValue = event.target.value;
    if (event.target.type === 'checkbox') {
      let stateArr = this.state[stateName];
      if (stateArr) {
        if (event.target.checked) {
          stateArr.push(stateValue);
          this.setState({ [stateName]: stateArr });
        } else {
          let indexToRemove = stateArr.indexOf(stateValue);
          stateArr.splice(indexToRemove, 1);
          this.setState({ [stateName]: stateArr });
        }
      } else console.log('stateArr missing');
    } else {
      this.setState({ [stateName]: stateValue });
    }
  };

  //pour les checkbox, en faire des controlled component (controler la prop "checked")
  handleCheck = (filtersArr, inputValue) => {
    let formerInputArr = this.state[filtersArr];
    if (formerInputArr) {
      if (formerInputArr.includes(inputValue)) {
        return 'checked';
      } else {
        return ''; //pour que le check sente qu'il est controlé par React
      }
    }
  };

  showFilters = () => {
    const $certificationsList = document.querySelector('.certificationsList');
    const $titles = document.querySelectorAll('#filtres legend');
    if ($certificationsList.classList.contains('hideCheckboxes')) {
      $certificationsList.classList.remove('hideCheckboxes');
      $certificationsList.classList.add('showCheckboxes');
    } else {
      $certificationsList.classList.add('hideCheckboxes');
      $certificationsList.classList.remove('showCheckboxes');
    }
  };

  closeAllFilters = () => {
    const $checkboxes = document.querySelectorAll('.checkboxes');
    $checkboxes.forEach((checkboxGroup) => {
      checkboxGroup.classList.remove('showCheckboxes');
      checkboxGroup.classList.add('hideCheckboxes');
      console.log('added hideCheckboxes to all');
    });
  };

  //fermer les checkbox quand elles ne sont pas en cours de séléction
  handleClick = (index) => {
    const $titles = document.querySelectorAll('#filtres legend');
    const $checkboxes = document.querySelectorAll('.checkboxes');
    //je clique sur un libellé
    //s'il est fermé, ts les el deviennt hiden et mon element prend la class show
    if ($checkboxes[index].classList.contains('hideCheckboxes')) {
      $checkboxes.forEach((checkbox) => {
        checkbox.classList.add('hideCheckboxes');
        checkbox.classList.remove('showCheckboxes');
      });
      $checkboxes[index].classList.remove('hideCheckboxes');
      $checkboxes[index].classList.add('showCheckboxes');
    }
    //S'il est ouvert, il perd la class show et gagne la class hide
    else {
      $checkboxes[index].classList.add('hideCheckboxes');
      $checkboxes[index].classList.remove('showCheckboxes');
    }
  };

  render() {
    return (
      <div className="searchbar">
        <SearchBar openingDaysList={this.props.openingDaysList} />
        <section id="filtres">
          <fieldset>
            <legend onClick={() => this.handleClick(0)}>Certifications</legend>
            <div className="checkboxes hideCheckboxes certificationsList">
              {this.props.certificationsList.map((aCertification) => (
                <div key={aCertification.value}>
                  <input
                    className="capitalize"
                    type="checkbox"
                    name="certificationsFilters"
                    value={aCertification.value}
                    id={aCertification.id}
                    onChange={this.handleChange}
                    checked={this.handleCheck(
                      'certificationsFilters',
                      aCertification.value
                    )}
                  />
                  <label htmlFor={aCertification.id}>
                    {aCertification.traduction}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend onClick={() => this.handleClick(1)}>Activity type</legend>
            <div className="checkboxes hideCheckboxes">
              {this.props.activityTypesList.map((anActivity) => (
                <div key={anActivity.value}>
                  <input
                    className="capitalize"
                    type="checkbox"
                    name="activityTypeFilters"
                    value={anActivity.value}
                    id={anActivity.id}
                    onChange={this.handleChange}
                    checked={this.handleCheck(
                      'activityTypeFilters',
                      anActivity.value
                    )}
                  />
                  <label htmlFor={anActivity.id}>{anActivity.traduction}</label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend onClick={() => this.handleClick(2)}>Farm type</legend>
            <div className="checkboxes hideCheckboxes">
              {this.props.farmTypeList.map((aFarmType) => (
                <div key={aFarmType.value}>
                  <input
                    className="capitalize"
                    type="checkbox"
                    name="farmTypeFilters"
                    value={aFarmType.value}
                    id={aFarmType.id}
                    onChange={this.handleChange}
                    checked={this.handleCheck(
                      'farmTypeFilters',
                      aFarmType.value
                    )}
                  />
                  <label htmlFor={aFarmType.id}>{aFarmType.traduction}</label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend onClick={() => this.handleClick(3)}>Public</legend>
            <div className="checkboxes hideCheckboxes">
              {this.props.publicTypesList.map((aPublicType) => (
                <div key={aPublicType.value}>
                  <input
                    className="capitalize"
                    type="checkbox"
                    name="publicTypesFilters"
                    value={aPublicType.value}
                    id={aPublicType.id}
                    onChange={this.handleChange}
                    checked={this.handleCheck(
                      'publicTypesFilters',
                      aPublicType.value
                    )}
                  />
                  <label htmlFor={aPublicType.id}>
                    {aPublicType.traduction}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend onClick={() => this.handleClick(4)}>Language</legend>
            <div className="checkboxes hideCheckboxes">
              {this.props.spokenLanguagesList.map((aLanguage) => (
                <div key={aLanguage.value}>
                  <input
                    className="capitalize"
                    type="checkbox"
                    name="spokenLanguagesFilters"
                    value={aLanguage.value}
                    id={aLanguage.id}
                    onChange={this.handleChange}
                    checked={this.handleCheck(
                      'spokenLanguagesFilters',
                      aLanguage.value
                    )}
                  />
                  <label htmlFor={aLanguage.id}>{aLanguage.traduction}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </section>
      </div>
    );
  }
}

export default SearchBarWithFilters;
