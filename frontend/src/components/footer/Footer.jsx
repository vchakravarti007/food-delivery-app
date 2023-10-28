import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <h2>Importans links</h2>
        <NavLink to="/" className="footer-navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="footer-navlink">
          About
        </NavLink>
        <NavLink to="contact" className="footer-navlink">
          Contact
        </NavLink>
        <NavLink to="cart" className="footer-navlink">
          Cart
        </NavLink>
      </div>
      <div className="footer-subscribe">
        <h2>Get in touch !</h2>
        <div className="subscribe-footer">
          <input type="email" placeholder="example05@" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-social">
        <h2>Social Platform</h2>
        <div className="footer-social-icons">
          <p className="facebook-icon">
            {" "}
            <FacebookIcon />{" "}
          </p>
          <p className="insta-icon">
            {" "}
            <InstagramIcon />{" "}
          </p>
          <p className="twitter-icon">
            {" "}
            <TwitterIcon />{" "}
          </p>
          <p className="linkdin-icon">
            {" "}
            <LinkedInIcon />{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
