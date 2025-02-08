import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import Home from "./pages/home/Home.jsx";
import MainLayout from "./components/MainLayout.jsx";
import About from "./pages/about/About.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
