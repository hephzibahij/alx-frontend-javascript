import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
  try {
    const [userData, photoData] = await Promise.all([
      createUser(),
      uploadPhoto()
    ]);

    console.log(`body ${userData.firstName} ${userData.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
