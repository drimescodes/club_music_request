import React, { useState } from "react";
import NotFound from "./components/NotFound.js";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);

  function handleUserGenerated(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home onUserGenerated={handleUserGenerated} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <p>Generated Users:</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>User ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Song Request: {user.song_request}</p>
            <p>Request Time: {user.request_time}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
