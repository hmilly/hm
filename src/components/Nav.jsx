import "../styles/nav.scss";
import Contact from "./Contact";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#profile-container" id="lg-txt">
            About
          </a>
        </li>
        <li>
          <a href="#stack-container" id="lg-txt">
            Stack
          </a>
        </li>
        <li>
          <a href="#projects-container" id="lg-txt">
            Projects
          </a>
        </li>
      </ul>
      <Contact />
    </nav>
  );
};

export default Nav;
