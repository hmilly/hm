import "../styles/footer.scss";
import { SiSass, SiReact } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Built with</p>
        <SiSass />
        <SiReact />
      </div>
      <div>
        <p>Hmilly</p>
        <p>2023</p>
      </div>
    </footer>
  );
};

export default Footer;
