import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext'; // 1. Import the context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // 2. Wrap the component tree with the Provider
    // 3. Pass the data as the 'value' prop
    <UserContext.Provider value={userData}>
      <ProfilePage /> 
      {/* 4. Note: We no longer pass the 'userData' prop here! */}
    </UserContext.Provider>
  );
}

export default App;