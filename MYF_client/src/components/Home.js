import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarHome from './SearchBar_Home';


class Home extends React.Component {
  state = { location: '', day: '', visitor: 1 };

  render() {
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
        description:
          "C'est dans l'Antiquité qu'il a conquis le bassin méditerranéen. Les Grecs le servaient en soupe aux jeunes mariés le matin de leur nuit de noces : voilà d'où vient la légende des enfants qui naissent dans les choux. De plus, il était réputé pour chasser les humeurs maussades. En conséquence, ils avaient coutume de le déguster avant leurs banquets orgiaques. Il y a 4 000 ans, on commença à le cultiver. Ce sont les Chinois qui mirent au point sa conservation en saumure, qui lui permit de conquérir l'Europe de l'Est, où son succès fut immédiat. Devenue très populaire auprès des populations paysannes de tout le continent européen, cette plante potagère n'en était pas moins très appréciée par les rois. Elle trônait en effet aux banquets de Louis XIV notamment. A cette époque d'ailleurs, on lui reconnaissait la vertu de protéger du scorbut. Elle faisait donc partie des 'bagages' des marins qui se sont rendus aux Amériques.",
        image:
          'https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      },
      {
        nom: 'Hauts Coteaux',
        description:
          "La transformation du raisin en vin est appelée la vinification. L'étude du vin est l'œnologie. La grande variété de vins existant au monde s'explique par les différences de terroirs, de cépages, de modes de vinification ou de types d'élevage. Ainsi ils peuvent donner des vins rouges, rosés ou blancs, mais aussi des vins avec un taux de sucre résiduel variant (secs ou doux), ou une effervescence variante (tranquilles ou effervescents). La viticulture a colonisé une vaste partie du monde et de très nombreux pays sont producteurs de vin.",
        image:
          'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      },
    ];

    const fonctionnement = [
      {
        image:
          'https://res.cloudinary.com/dbrdms1su/image/upload/v1613165952/meet-your-food-React-v2/farmers_eszekh.jpg',
        number: '1. ',
        titre: 'Recherchez un producteur proche de vous',
      },
      {
        image:
          'https://res.cloudinary.com/dbrdms1su/image/upload/v1613170195/meet-your-food-React-v2/contact_udn3nc.png',
        number: '2. ',
        titre: 'Contactez-le',
      },
      {
        image:
          'https://res.cloudinary.com/dbrdms1su/image/upload/v1613168854/meet-your-food-React-v2/visit_dv6dmz.png',
        number: '3. ',
        titre: 'Rencontrez-le sur son exploitation et découvrez son travail',
      },
      {
        image:
          'https://res.cloudinary.com/dbrdms1su/image/upload/v1613169047/meet-your-food-React-v2/activity_rks4j6.png',
        number: '4. ',
        titre: 'Visitez, goûtez, participez, rapportez un souvenir',
      },
      {
        image:
          'https://res.cloudinary.com/dbrdms1su/image/upload/v1613169117/meet-your-food-React-v2/like_tyholy.png',
        number: '5. ',
        titre: 'Remerciez-le',
      },
    ];

    return (
      <div className="homepage">
        <div id="page_accueil">
          <h2>RENCONTRE CE QUE TU MANGES</h2>
          <p>Aventurez-vous dans les coulisses de votre alimentation</p>
          <SearchBarHome
            openingDaysList={this.props.openingDaysList}
            liftStatesToApp={this.props.liftStatesToApp}
          />
          <div id="season">
            <h2>La saison des moissons</h2>
            <p></p>
          </div>
        </div>
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
        <section id="fonctionnement">
          <h2>Comment ça marche ?</h2>
          <ul>
            {fonctionnement.map((étape, i) => (
              <li key={i}>
                <img src={étape.image} alt="farm"></img>
                <div>
                  <h4>{étape.number}</h4>
                  <h4>{étape.titre}</h4>
                  <p>{étape.detail}</p>
                </div>
              </li>
            ))}
          </ul>
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
  }
}
export default Home;
