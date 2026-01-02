export function Home() {
  return (
    <div className="homeScreen">
      <h1 className="brand">Engage</h1>
      <p className="tagline">Track Yourself</p>

      <div className="loginComponent">
        <input
          className="inputBar"
          type="email"
          placeholder="Continue with email"
        />
      </div>
    </div>
  );
}
