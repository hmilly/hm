import KCS from "./images/projects/KCS.jpg";
import Artsy from "./images/projects/artsy.jpg";
import Art from "./images/projects/art.jpg";
import Menu from "./images/projects/menu.jpg";
import Weather from "./images/projects/weather.jpg";
import Quiz from "./images/projects/quiz.jpg";

export const projectData = [
  {
    website: "https://kent-cleaning-pilgrims.vercel.app/",
    code: "https://github.com/hmilly/kent-cleaning-pilgrims",
    title: "Kent Cleaning Pilgrims",
    description: "This site uses React and SASS.",
    comments:
      "This website is for a cleaning company based in Kent. I obtained the template from a private client.",
    image: KCS,
  },

  {
    website: "https://artsy-social-hmilly.vercel.app/",
    code: "https://github.com/hmilly/artsy",
    title: "Artsy social",
    description:
      "I am currently in the process of finishing this website. It offers the ability for artists to sign up and upload a body of work. Other users can also sign up to browse the site, allowing them to contact artists and register their interests in their work",
    comments:
      "I created this site with React, bootstrap and firebase. This project has allowed me to get to grips with bootstrap and provided me with range of skills for firebase too, including how to authenticate users and generally use the DB.",
    image: Artsy,
  },

  {
    website: "https://aldens-art.vercel.app/",
    code: "https://github.com/hmilly/aldens-art",
    title: "An artist showcase website",
    description:
      "This is an app created using Svelte that is styled with CSS, more specifically using grid and flexbox",
    comments:
      "I decided to create something using Svelte as I have heard good things about it. I have since exteneded this site with the Artsy social app. It features within the app as a artists profile; see if you can find it!",
    image: Art,
  },

  {
    website: "https://hmilly.github.io/recipe-book",
    code: "https://github.com/hmilly/recipe-book",
    title: "Food menu website",
    description:
      "This website uses React and SASS. I created this during my course in 2020 based from: ",
    link: "https://www.figma.com/file/VQz2NrvK8lPykD91kedoKJ/e-commerce_2",
    comments:
      "I've since updated this project recently, but it still needs a few tweaks.",
    image: Menu,
  },

  {
    website: "https://weather-nine-gamma.vercel.app/",
    code: "https://github.com/hmilly/weather/",
    title: "Weather app",
    description:
      "This is a React based app that uses Typescript, SASS and utilises 2 APIs. The user enters a city name using a location API, selects it from the dropdown, then detailed weather info is displayed from the weather API",
    comments:
      "I used TS with React to learn more about how they work with each other. I chose SASS to style as I really enjoy the readability and cleanliness of it.",
    image: Weather,
  },
  {
    website: "https://quiz-omega-gold.vercel.app/",
    code: "https://github.com/hmilly/quiz/",
    title: "Who wants to be a Millionaire app",
    description:
      "I created this app with Next.JS and Tailwind. There is an internal database of questions which is suited to a non-technical user, as they just follow the database formatting to input their own range of questions",
    comments:
      "I learned Tailwind making this app. Later I’d like to improve the functionality of the helper buttons and implement other options like the real game does.",
    image: Quiz,
  },
];
