import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Hosts from './components/AllHosts/Hosts';
import AHost from './components/HostPage/AHost';
import Login from './components/Login';
import service from './components/route-service';

class App extends React.Component {
  state = { userLogged: null, location: '', day: '', visitor: 1 };

  componentDidMount() {
    service
      .get('/api/loggedin')
      .then((res) => this.setState({ userLogged: res.data.user }))
      .catch((err) => console.log(err));
  }

  //à appeler dans le questionnaire login
  handleUpdateUser = (newUserId) => {
    this.setState({ userLogged: newUserId });
  };

  handleLogout = () => {
    service
      .get('/api/logout')
      .then((res) => this.setState({ userLogged: null }))
      .catch((err) => console.log(err));
  };

  sendToApp = (stateName, value) => {
    this.setState({ [stateName]: value });
  };

  updateDay = (dayValue) => {
    this.setState({ day: dayValue });
  };

  render() {
    //ICI définir les choix de caractéristiques à séléctionner par les product'hôtes (ceux du model Host)
    const farmTypeList = [
      {
        value: 'poultry-farming',
        id: 'poultry',
        traduction: 'Elevage de volailles',
      },
      { value: 'pig-farming', id: 'pig', traduction: 'Elevage porcin' },
      { value: 'cow-farming', id: 'cow', traduction: 'Elevage bovin' },
      { value: 'sheep-farming', id: 'sheep', traduction: 'Elevage de moutons' },
      { value: 'market-gardener', id: 'market', traduction: 'Maraichage' },
      { value: 'viticulture', id: 'viticulture', traduction: 'Viticulture' },
      { value: 'beekeeping', id: 'beekeeping', traduction: 'Apiculture' },
      {
        value: 'cheese-maker',
        id: 'cheese',
        traduction: 'Production de fromage',
      },
      { value: 'dairy-maker', id: 'dairy', traduction: 'Production de lait' },
    ];

    const activityTypesList = [
      { value: 'tasting', id: 'tasting', traduction: 'Dégustation' },
      {
        value: 'direct-selling',
        id: 'direct-selling',
        traduction: 'Vente directe',
      },
      { value: 'workshops', id: 'workshops', traduction: 'Ateliers' },
      { value: 'self-tour', id: 'self-tour', traduction: 'Visite autonome' },
      { value: 'guided-tour', id: 'guided-tour', traduction: 'Visite guidée' },
    ];

    const spokenLanguagesList = [
      { value: 'french', id: 'french', traduction: 'Français' },
      { value: 'english', id: 'english', traduction: 'Anglais' },
      { value: 'spanish', id: 'spanish', traduction: 'Espagnol' },
      { value: 'german', id: 'german', traduction: 'Allemand' },
    ];

    const certificationsList = [
      { value: 'bio', id: 'bio', traduction: 'Bio' },
      { value: 'AOP', id: 'aop', traduction: "Appelation d'Origine Protégée" },
      { value: 'AOC', id: 'aoc', traduction: "Appelation d'Origine Contrôlée" },
      {
        value: 'STG',
        id: 'stg',
        traduction: 'Spécialité Traditionnelle Garantie',
      },
      { value: 'biodynamic', id: 'biodynamic', traduction: 'Biodynamique' },
      { value: 'label_rouge', id: 'label_rouge', traduction: 'Label Rouge' },
    ];

    const publicTypesList = [
      { value: 'children', id: 'children', traduction: 'Enfants' },
      { value: 'seniors', id: 'seniors', traduction: 'Seniors' },
      {
        value: 'disabled',
        id: 'disabled',
        traduction: 'Accès aux personnes handicapés',
      },
    ];

    const openingDaysList = [
      { value: '', id: 'any', traduction: 'Tous' },
      { value: 'monday', id: 'monday', traduction: 'Lundi' },
      { value: 'tuesday', id: 'tuesday', traduction: 'Mardi' },
      { value: 'wednesday', id: 'wednesday', traduction: 'Mercredi' },
      { value: 'thursday', id: 'thursday', traduction: 'Jeudi' },
      { value: 'friday', id: 'friday', traduction: 'Vendredi' },
      { value: 'saturday', id: 'saturday', traduction: 'Samedi' },
      { value: 'sunday', id: 'sunday', traduction: 'Dimanche' },
    ];

    //pour afficher les intitulés en front et non les valeurs
    const valueToLabel = {
      'poultry-farming': 'Elevage de volailles',
      'pig-farming': 'Elevage porcin',
      'cow-farming': 'Elevage bovin',
      'sheep-farming': 'Elevage de moutons',
      'market-gardener': 'Maraichage',
      viticulture: 'Viticulture',
      beekeeping: 'Apiculture',
      'cheese-maker': 'Production de fromage',
      'dairy-maker': 'Production de lait',
      tasting: 'Dégustation',
      'direct-selling': 'Vente directe',
      workshops: 'Ateliers',
      'self-tour': 'Visite autonome',
      'guided-tour': 'Visite guidée',
      bio: 'Bio',
      AOP: 'AOP',
      AOC: 'AOC',
      IGP: 'IGP',
      STG: 'STG',
      biodynamic: 'Biodynamique',
      label_rouge: 'Label rouge',
      children: 'Enfants',
      seniors: 'Seniors',
      disabled: 'Accès aux personnes handicapés',
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thurday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      french: 'français',
      english: 'anglais',
      spanish: 'espagnol',
      german: 'allemand',
    };

    return (
      <div className="App">
        <Navbar userLogged={this.state.userLoggged} />
        <Switch>
          <Route
            exact={true}
            path="/create-account"
            render={() => (
              <CreateAccount
                farmTypeList={farmTypeList}
                activityTypesList={activityTypesList}
                spokenLanguagesList={spokenLanguagesList}
                certificationsList={certificationsList}
                publicTypesList={publicTypesList}
                openingDaysList={openingDaysList}
                valueToLabel={valueToLabel}
              />
            )}
          />
          <Route
            exact={true}
            path="/"
            render={() => (
              <Home
                openingDaysList={openingDaysList}
                liftStatesToApp={this.sendToApp}
              />
            )}
          ></Route>
          <Route
            exact={true}
            path="/hosts"
            render={() => (
              <Hosts
                farmTypeList={farmTypeList}
                activityTypesList={activityTypesList}
                spokenLanguagesList={spokenLanguagesList}
                certificationsList={certificationsList}
                publicTypesList={publicTypesList}
                openingDaysList={openingDaysList}
                day={this.state.day}
                location={this.state.location}
                visitor={this.state.visitor}
                updateDay={this.updateDay}
              />
            )}
          ></Route>
          <Route
            exact={true}
            path="/profile/:userId/public"
            render={(props) => (
              <AHost
                {...props}
                openingDaysList={openingDaysList}
                valueToLabel={valueToLabel}
              />
            )}
          />
          <Route
            exact={true}
            path="/login"
            render={(props) => (
              <Login handleUpdateUser={this.handleUpdateUser} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
