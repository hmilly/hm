import "../styles/contact.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <ul id="contact-container">
      <li>
        <a href="https://github.com/hmilly" target="_blank" rel="noreferrer" aria-label="github logo">
          <BsGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/hmilly/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin logo"
        >
          <BsLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
