import React from 'react';
import service from '../route-service';
import EnChargement from '../EnChargement';
import { Link } from 'react-router-dom';
import { BiCertification } from 'react-icons/bi';
import { GiFarmTractor } from 'react-icons/gi';
import { FaPeopleCarry } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { GrMapLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';

class AHost extends React.Component {
  state = { userShowed: {} };

  componentDidMount() {
    this.getHost();
  }

  getHost = () => {
    const id = this.props.match.params.userId;
    console.log('id', id);
    service
      .get(`/api/profile/${id}/public`)
      .then((res) => {
        this.setState({ userShowed: res.data.host || res.data.user });
      })
      .catch((err) => console.log('err', err));
  };

  //TODO
  getReviews = () => {};

  render() {
    const userShowed = this.state.userShowed;

    if (
      !userShowed ||
      !userShowed.photos ||
      !userShowed.certifications ||
      !userShowed.public ||
      !userShowed.userDetails ||
      !userShowed.farmType ||
      !userShowed.activitiesType ||
      !userShowed.openingDays
    )
      return <EnChargement />;

    //afficher les labels et non les values
    const certificationsShowed = userShowed.certifications.map(
      (certification) => this.props.valueToLabel[certification]
    );
    const publicTypesShowed = userShowed.public.map(
      (publicType) => this.props.valueToLabel[publicType]
    );
    const activitiesTypeShowed = userShowed.activitiesType.map(
      (anActivityType) => this.props.valueToLabel[anActivityType]
    );
    const farmTypeShowed = userShowed.farmType.map(
      (aFarmType) => this.props.valueToLabel[aFarmType]
    );

    const commentExamples = [
      {
        visitedHost: '6040fc76252239e2dcc089bf',
        visitor: {
          _id: '605de34e13925157309e6578',
          profilePic:
            'https://res.cloudinary.com/nina3am/image/upload/v1601573838/meet-your-food/PngItem_307416%20%281%29.png.png',
          firstName: 'Jon',
        },
        date: new Date('03/03/2021'),
        content: 'trop bien',
        rating: 1,
        _id: 1,
      },
      {
        visitedHost: '6040fc76252239e2dcc089bf',
        visitor: {
          _id: '605de34e13925157309e6578',
          profilePic:
            'https://res.cloudinary.com/nina3am/image/upload/v1601573838/meet-your-food/PngItem_307416%20%281%29.png.png',
          firstName: 'Jon',
        },
        date: new Date('03/03/2021'),
        content: 'cool',
        rating: 4,
        _id: 2,
      },
    ];
    //traitement du panier moyen
    const ratingExamples = commentExamples.map((comment) => comment.rating);
    const avCard =
      ratingExamples.reduce((a, b) => a + b) / ratingExamples.length;

    return (
      <div id="host_page">
        <Link to="/hosts">
          <button id="back_to_list">Back to list</button>
        </Link>
        <section id="host_photos">
          <img
            src="https://images.unsplash.com/photo-1612185682519-87d514f13789?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGZhcm18ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="cover"
          />
          <div>
            {userShowed.photos.map((photo, i) => {
              return i < 2 && <img key={i} src={photo} alt={photo} />;
            })}
            <button className="btn">More photos</button>
          </div>
        </section>
        <section id="farm_info">
          <div>
            <h2>{userShowed.farmName}</h2>
            <p>
              {/* TODO - ratingAv à calculer({userShowed.reviews.length}{' '}
              reviews) */}
            </p>
            <ul id="host_detail">
              <li>
                <label>
                  <BiCertification />
                  <p>Certifications</p>
                </label>
                <ul>
                  {certificationsShowed.map((certification) => {
                    return <li key={certification}>{certification}, </li>;
                  })}
                </ul>
              </li>
              <li>
                <label>
                  <GiFarmTractor />
                  <p>Type d'exploitation</p>
                </label>
                <ul>
                  {farmTypeShowed.map((farmType) => {
                    return <li key={farmType}>{farmType},</li>;
                  })}
                </ul>
              </li>
              <li>
                <label>
                  <FaPeopleCarry />
                  <p>Type d'activité</p>
                </label>
                <ul>
                  {activitiesTypeShowed.map((activityType) => {
                    return <li key={activityType}>{activityType},</li>;
                  })}
                </ul>
              </li>
              <li>
                <label>
                  <IoIosPeople />
                  <p>Public</p>
                </label>
                <ul>
                  {publicTypesShowed.map((aPublic) => {
                    return <li key={aPublic}>{aPublic},</li>;
                  })}
                </ul>
              </li>
              <li>
                <label>
                  <GrMapLocation />
                  <p>Lieu</p>
                </label>
                <p>{userShowed.location},</p>
              </li>
            </ul>
          </div>
          <div>
            <div id="host_name">
              <img
                src={userShowed.userDetails.profilePic}
                alt={userShowed.userDetails.profilePic}
              />
              <p>
                {userShowed.userDetails.firstName}{' '}
                {userShowed.userDetails.lastName}
              </p>
            </div>
            <button className="btn">
              <AiOutlineMail />
              Contact your host
            </button>
            <button className="btn">Programmer une visite</button>
            <div id="opening_hours">
              <p>HORAIRES D'OUVERTURE:</p>
              <h3>
                {userShowed.openingHoursStart} - {userShowed.openingHoursEnd}
              </h3>
            </div>
            <div id="opening_days">
              <p>JOURS D'OUVERTURE:</p>
              <ul>
                {this.props.openingDaysList.map((openingDay) => (
                  <li key={openingDay.traduction}>
                    {/* si  openingday.value est inclus dans hostExample.openingDay alors ✅ sinon ❌*/}
                    {userShowed.openingDays.includes(openingDay.value) ? (
                      <p>✅ {openingDay.traduction}</p>
                    ) : (
                      <p>❌{openingDay.traduction}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* <Comments/> */}
        <section id="reviews">
          <div id="review_header">
            <h3>Commentaires</h3>
            <p>Panier moyen: {avCard} / 5 </p>
          </div>
          {commentExamples.map((comment) => (
            <div id="review" key={comment._id}>
              <div id="review_detail">
                <div>
                  <img src={comment.visitor.profilePic} alt="profilPic" />
                </div>
                <div>
                  <p>Commentaire laissé par {comment.visitor.firstName}</p>
                  <p>Le {comment.date.toLocaleString()}</p>
                </div>
              </div>
              <p id="review_content">{comment.content}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default AHost;
