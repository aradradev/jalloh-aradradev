import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo3D (1).png';
import LogoSub from '../../assets/images/logo-sub.png';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSub} alt="logo subtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4e4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4e4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4e4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
