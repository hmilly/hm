import KCS from "./images/projects/KCS.jpg";
import Artsy from "./images/projects/artsy.jpg";
import Art from "./images/projects/art.jpg";
import Hm from "./images/projects/hm.jpg";
import Menu from "./images/projects/menu.jpg";
import Weather from "./images/projects/weather.jpg";
import Quiz from "./images/projects/quiz.jpg";

export const projectData = [
  {
    website: "https://artsy-social-hmilly.vercel.app/",
    code: "https://github.com/hmilly/artsy",
    title: "Artsy social",
    description:
      "I created this site with React, bootstrap and firebase. This project has allowed me to get to grips with bootstrap and provided me with range of skills for firebase too, including how to authenticate users and use the DB",
    comments:
      "This is a social media site which allows artists to upload a body of work. Other interested users can also sign up to browse the site, allowing them to register their interest in pieces of art",
    image: Artsy,
  },
  {
    website: "https://kent-cleaning-pilgrims.vercel.app/",
    code: "https://github.com/hmilly/kent-cleaning-pilgrims",
    title: "Kent Cleaning Pilgrims",
    description: "This site uses React and SASS and was made for a client",
    comments:
      "A website for a cleaning company which is based in Kent. I obtained the original template from the client and this is the outcome",
    image: KCS,
  },
  {
    website: "https://aldens-art.vercel.app/",
    code: "https://github.com/hmilly/aldens-art",
    title: "Aldens art",
    description:
      "This is an app created using Svelte as I wanted to try it out - styled using CSS",
    comments: "This is the precursor to the Artsy social site above.",
    image: Art,
  },
  {
    website: "https://hmilly.github.io/",
    code: "https://github.com/hmilly/hmilly.github.io",
    title: "Portfolio website",
    description:
      "I used Gatsby and styled components to create this static site",
    comments:
      "This was my first / original portfolio site which I have since retired",
    image: Hm,
  },
  {
    website: "https://hmilly.github.io/recipe-book",
    code: "https://github.com/hmilly/recipe-book",
    title: "Takeaway site",
    description:
      "This was the first website I made using React during my web dev course. Styled using SASS",
    comments: "The template used can be found on figma here: ",
    link: "https://www.figma.com/file/VQz2NrvK8lPykD91kedoKJ/e-commerce_2",
    image: Menu,
  },
  {
    website: "https://weather-nine-gamma.vercel.app/",
    code: "https://github.com/hmilly/weather/",
    title: "Weather app",
    description:
      "This is a React based app that uses Typescript, SASS and 2 APIs. One for the city name drop-down, and one when a city is selected, display the weather for that location",
    comments:
      "I used TS with React to learn more about how they work with each other",
    image: Weather,
  },
  {
    website: "https://quiz-omega-gold.vercel.app/",
    code: "https://github.com/hmilly/quiz/",
    title: "'Who wants to be a Millionaire?' app",
    description:
      "I created this app with Next.JS and Tailwind. There is an internal database of questions which is suited to a non-technical user, as they just follow the database formatting to input their own range of questions",
    comments: "I learned Tailwind making this app.",
    image: Quiz,
  },
];
