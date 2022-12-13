import logo from "../../assets/img/logo.png";
import "../../assets/css/main.scss";

const Logo = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="Main Logo" />
    </div>
  );
};

export default Logo;
