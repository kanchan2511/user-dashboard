


import React, { useState, useContext, useMemo, Suspense, lazy } from "react";
import { UserContext, UserProvider } from "./context/userContext"; 
import SearchBar from "./components/SearchBar";
import "./App.css";


const UserCard = lazy(() => import("./components/UserCard"));

const App = () => {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
};

const MainApp = () => {
  const { users, loading, error } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">{error}</h2>;

  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid">
        <Suspense fallback={<h3>Loading Cards...</h3>}>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
