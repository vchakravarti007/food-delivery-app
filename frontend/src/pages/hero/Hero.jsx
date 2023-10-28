import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logoutUser = () => {
    localStorage.removeItem("user");
    location.reload();
  };

  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>
          Haldiram's Delicious Food, <br /> delivered right at your doorstep!
        </h1>
        <p>
          Experience the rich and delectable world of Haldiram's cuisine at your
          fingertips with the Haldiram Food Delivery App! Indulge in the
          authentic flavors of India's favorite snacks, sweets, and savories,
          all conveniently delivered to your doorstep.
        </p>
        <div>
          <button
            className="order-now-btn"
            onClick={() => navigate(user ? "/foods" : "/login")}
          >
            {user ? "Start Ordering" : "Login now"}
          </button>
          {user && (
            <button style={{marginLeft: '10px'}} className="order-now-btn" onClick={() => logoutUser()}>
              {"Logout"}
            </button>
          )}
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://eathub.live/static/assets/images/deliverybike-914x596.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
