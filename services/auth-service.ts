import { getCurrentUser } from 'aws-amplify/auth';
import { client } from './client';

// async function UserDataInTable(
//   userId: string,
//   userName: string,
//   userEmail: string
// ) {
//   const user = getCurrentUser();

//   client.models.User.create({
//     id: userId,
//     email: userEmail,
//     tierId: undefined,
//     name: userName,
//   });
// }

// export { checkUserDataInTable };
