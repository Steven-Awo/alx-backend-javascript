import uploadPhoto from './5-photo-reject';

import signUpUser from './4-user-promise';


export default async function handleProfileSignup(firstName, lastName, fileName) {
  const photo = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  }));
  const user = await signUpUser(firstName, lastName).then((value) => ({
    status: 'fulfilled',
    value,
  }));
  return [user, photo];
}
