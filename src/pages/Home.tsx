import { useState } from "react";
import "./Home.css";
import { isValidEmail } from "../utils/validateEmail";
import { checkEmailExists } from "../utils/checkEmailExists";

const Home = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "login" | "signup">("email");
  const [loading, setLoading] = useState(false);

  const handleArrowClick = async () => {
    if (!isValidEmail(email)) return;

    setLoading(true);
    const exists = await checkEmailExists(email);
    setLoading(false);

    setStep(exists ? "login" : "signup");
  };

  return (
    <div className="homeScreen">
      <div className="contentWrapper">
        <h1 className="brandText">Engage</h1>
        <p className="tagline">Track yourself</p>


        <div className="emailRow">
          <input
            className="inputBar"
            type="email"
            placeholder="Continue with Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="arrowButton"
            onClick={handleArrowClick}
            disabled={loading}
          >→
          </button>
        </div>

        {step === "login" && (
          <div className="authBlock">
            <input
              className="inputBar"
              type="password"
              placeholder="Enter password"
            />
          </div>
        )}

        {/* Signup */}
        {step === "signup" && (
          <div className="authBlock">
            <input
              className="inputBar"
              type="password"
              placeholder="Create password"
            />
            <input
              className="inputBar"
              type="password"
              placeholder="Confirm password"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
