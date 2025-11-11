import UserInfo from './UserInfo';

// 1. Remove 'userData' from props
function ProfilePage() {
  // 2. Simply render UserInfo without passing the prop
  return <UserInfo />;
}

export default ProfilePage;