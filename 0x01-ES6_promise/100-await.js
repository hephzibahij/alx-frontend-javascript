import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  let photoResponse, userResponse;

  try {
    photoResponse = await uploadPhoto();
    userResponse = await createUser();
  } catch (error) {
    console.error('An error occurred:', error);
    return { photo: null, user: null };
  }

  return { photo: photoResponse, user: userResponse };
}

export default asyncUploadUser;
