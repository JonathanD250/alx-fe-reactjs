import { useContext } from 'react'; // 1. Import the useContext hook
import UserContext from './UserContext'; // 2. Import the context

// 3. Remove 'userData' from the function's props
function UserDetails() { 
  // 4. Get the 'userData' from the context
  const userData = useContext(UserContext);

  // The rest of the component remains the same!
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;