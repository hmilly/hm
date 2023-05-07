import "../styles/contact.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <ul id='contact'>
      <li>
        <a href="https://github.com/hmilly" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/hmilly/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
