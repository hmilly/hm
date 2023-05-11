import "../styles/nav.scss";
import Contact from "./Contact";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#profile-container">About</a>
        </li>
        <li>
          <a href="#stack-container">Stack</a>
        </li>
        <li>
          <a href="#projects-container">Projects</a>
        </li>
      </ul>
      <Contact />
    </nav>
  );
};

export default Nav;
