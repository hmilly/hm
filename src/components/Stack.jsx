import "../styles/stack.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiSvelte,
  SiGatsby,
  SiNextdotjs,
  SiNodedotjs,
  SiSocketdotio,
  SiFigma,
  SiJest,
} from "react-icons/si";

import { SiPhp, SiWordpress } from "react-icons/si";

const Stack = () => {
  return (
    <section id="stack-container">
      <div>
        <h3>Most experienced:</h3>
        <ul>
          <li>
            <SiHtml5 />
            <p>HTML</p>
          </li>
          <li>
            <SiCss3 />
            <p>CSS</p>
          </li>
          <li>
            <SiJavascript />
            <p>Javascript</p>
          </li>
          <li>
            <SiReact />
            <p>React</p>
          </li>
          <li>
            <SiSass />
            <p>Sass </p>
          </li>
          <li>
            <SiStyledcomponents />
            <p>Styled components</p>
          </li>
          <li>
            <SiTailwindcss />
            <p>Tailwind</p>
          </li>
          <li>
            <SiBootstrap />
            <p>Bootstrap</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Somewhat experienced:</h3>
        <ul>
          <li>
            <SiFirebase />
            <p>Firebase</p>
          </li>
          <li>
            <SiExpress />
            <p>Express</p>
          </li>
          <li>
            <SiMongodb />
            <p>Mongodb</p>
          </li>
          <li>
            <SiMysql />
            <p>Mysql</p>
          </li>
          <li>
            <SiTypescript />
            <p>Typescript</p>
          </li>
          <li>
            <SiSvelte />
            <p>Svelte</p>
          </li>
          <li>
            <SiGatsby />
            <p>Gatsby</p>
          </li>
          <li>
            <SiNextdotjs />
            <p>NextJs</p>
          </li>
          <li>
            <SiNodedotjs />
            <p>Node</p>
          </li>
          <li>
            <SiSocketdotio />
            <p>Socket.io</p>
          </li>{" "}
          <li>
            <SiFigma />
            <p>Figma</p>
          </li>
          <li>
            <SiJest />
            <p>Jest</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Looking to learn:</h3>
        <ul>
          <li>
            <SiPhp />
            <p>PHP</p>
          </li>
          <li>
            <SiWordpress />
            <p>Wordpress</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Stack;
