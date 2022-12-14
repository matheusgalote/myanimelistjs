import "../../assets/css/pages/_home.scss";
import king from "../../assets/img/_home/king.png";

const Home = () => {
  return (
    <div>
      <div className="home-title">
        <div>
          <img src={king} alt="crown" />
        </div>
        <h1>My Anime List</h1>
      </div>
      <div className="home-grid-content">
        <div className="col home-user-quadrant"></div>
        <div className="col-6 home-main-quadrant">
          <div>
          </div>
        </div>
        <div className="col home-ranking-quadrant"></div>
      </div>
    </div>
  );
};

export default Home;
