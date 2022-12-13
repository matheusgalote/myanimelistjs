import Navigation from "./utils/Navigation";

import "./assets/css/main.scss";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <h1>Welcome To MyAnimeList.</h1>
      </div>
    </div>
  );
};

export default App;
