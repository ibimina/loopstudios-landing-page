import Navigation from "../../shared/Navigation";
import"./footer.css"
import logo from "../../assets/images/logo.svg"
import facebook from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";


function Footer(props) {
    return (
      <footer>
        <div className="footer-one">
          <h5>
            <img src={logo} alt="loopstudios logo icon" className="footer-logo" />
          </h5>
          <Navigation navlist={props.navlist} className={"footer-nav"} />
        </div>
        <div className="footer-two">
          <div className="social">
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={pinterest} alt="pinterest icon" />
            <img src={instagram} alt="instagram icon" />
          </div>
          <p className="footer-text">{props.footerText}</p>
        </div>
      </footer>
    );
}

export default Footer;
