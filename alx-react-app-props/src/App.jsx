import React from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";

function App() {
  const user = { name: "Jonathan", email: "jonathan@example.com" };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to the User Context App</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
