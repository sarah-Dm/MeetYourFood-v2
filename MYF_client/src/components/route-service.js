import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_APIURL || ''}`,
  withCredentials: true,
});

const errorHandler = (err) => {
  throw err;
};

export default service;

function createAccount(
  userProfile,
  email,
  password,
  firstname,
  username,
  name,
  profilePic,
  description,
  farmName,
  website,
  address,
  zipCode,
  city,
  farmType,
  activityTypes,
  certifications,
  visitorType,
  openingDays,
  openingHoursStart,
  openingHoursEnd,
  spokenLanguages,
  photos,
  maximumVisitors
) {
  return service
    .post('/api/create-account', {
      userProfile,
      email,
      password,
      firstname,
      username,
      name,
      profilePic,
      description,
      farmName,
      website,
      address,
      zipCode,
      city,
      farmType,
      activityTypes,
      certifications,
      visitorType,
      openingDays,
      openingHoursStart,
      openingHoursEnd,
      spokenLanguages,
      photos,
      maximumVisitors,
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export { createAccount };
