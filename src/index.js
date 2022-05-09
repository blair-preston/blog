import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/home';
import AboutMe from './routes/aboutMe';
import Projects from './routes/projects';
import Blog from './routes/blog';
import PythonBlog from './blogs/python';


const rootElement = document.getElementById("root"); 

render(
  <BrowserRouter>
    <Routes className="body">
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="PythonBlog" element={<PythonBlog />} />
      </Route> 
    </Routes>
    <footer className="footer">Contact me info! </footer>
  </BrowserRouter>,
  rootElement
);
