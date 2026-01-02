import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="homeScreen">
      <div className="contentWrapper">
        <h1 className="brandText">Engage</h1>
        <p className="tagline">Track yourself</p>

        <div className="loginComponent">
          <input
            className="inputBar"
            type="email"
            placeholder="Continue with Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
