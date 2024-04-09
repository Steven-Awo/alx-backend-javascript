import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let photogh;
  let userr;
  try {
    photogh = await uploadPhoto();
    userr = await createUser();
  } catch (e) {
    photogh = null;
    userr = null;
  }
  return { photogh, userr };
}
