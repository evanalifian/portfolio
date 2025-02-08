import Algoflow from "../assets/projects/algoflow.png";
import ExpressBoilerplate from "../assets/projects/express-web-boilerplate.png";
import ReactBoilerplate from "../assets/projects/react-spa-boilerplate.png";
import Portfolio from "../assets/projects/portfolio.png";

import HTML from "../assets/techs/html.svg";
import Javascript from "../assets/techs/javascript.svg";
import React from "../assets/techs/react.svg";
import ReactRouter from "../assets/techs/react-router.svg";
import TailwindCSS from "../assets/techs/tailwindcss.svg";
import Express from "../assets/techs/express.svg";

export const projects = [
  {
    name: "Algoflow",
    desc: "Algorithms visualization using JavaScript DOM.",
    preview_img: Algoflow,
    url: "http://algoflows.vercel.app/",
    techs: [
      {
        name: "HTML",
        icon: HTML,
      },
      {
        name: "JavaScript",
        icon: Javascript,
      },
      {
        name: "TaiilwindCSS",
        icon: TailwindCSS,
      },
    ],
  },
  {
    name: "Express Web App Boilerplae",
    desc: "Express boilerplate to make to build web app.",
    preview_img: ExpressBoilerplate,
    url: "https://github.com/evanalifian/express-web-boilerplate",
    techs: [
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "TaiilwindCSS",
        icon: TailwindCSS,
      },
    ],
  },
  {
    name: "React SPA Boilerplae",
    desc: "React SPA boilerplate using React Router.",
    preview_img: ReactBoilerplate,
    url: "https://github.com/evanalifian/react-app-boilerplate",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "React Router",
        icon: ReactRouter,
      },
      {
        name: "TaiilwindCSS",
        icon: TailwindCSS,
      },
    ],
  },
  {
    name: "Portfolio",
    desc: "Evan Alifian portfolio.",
    preview_img: Portfolio,
    url: "",
    techs: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "React Router",
        icon: ReactRouter,
      },
      {
        name: "TaiilwindCSS",
        icon: TailwindCSS,
      },
    ],
  },
];
