import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Home() {
  const [isActive, setActive] = useState(false);

  const openGuest = () => {
    setActive(!isActive);
  };
  const closeGuest = () => {
    setActive(!isActive);
  };
  return (
    <main>
      <section id="main" className="flex column align-center justify-center">
        <h1>RAVEREQUEST</h1>
        <div className="links">
          <button onClick={openGuest}>Continue as Guest</button>
          <a href="dj-login">Continue as DJ</a>
        </div>
      </section>
      <section id="guest" className={isActive ? "open flex align-center justify-center" : "flex align-center justify-center"}>
        <div className="inner column flex align-center justify-center">
          <FaTimes onClick={closeGuest} />
          <h2>Continue as User</h2>
          <form action="">
            <input
              type="text"
              placeholder="Input your nickname"
              id="user_name"
            />
            <button type="submit">Continue</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
