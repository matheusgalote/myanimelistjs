import Navigation from "./utils/Navigation";

import "./assets/css/main.scss";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <Home />
      </div>
    </div>
  );
};

export default App;
