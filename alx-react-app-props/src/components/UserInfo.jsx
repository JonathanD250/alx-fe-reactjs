import UserDetails from './UserDetails';

// 1. Remove 'userData' from props
function UserInfo() {
  // 2. Simply render UserDetails without passing the prop
  return <UserDetails />;
}

export default UserInfo;