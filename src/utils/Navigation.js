import "../assets/css/main.scss";
import Logo from "../components/miscellaneous/Logo";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid main-container">
        <a className="navbar-brand text-light" href=".">
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link text-light active"
              aria-current="page"
              href="."
            >
              Home
            </a>
            <a className="nav-link text-light" href=".">
              Animes
            </a>
            <a className="nav-link text-light" href=".">
              Mangás
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
