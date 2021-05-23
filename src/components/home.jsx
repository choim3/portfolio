import { Link } from "react-router-dom";
import ".././css/home.css";
export default function Home() {
  return (
    <div className=" parent-grid">
      <header className="header"> Matthew Choi </header>
      <div className="name-container">
        <h1 className="name"> Matthew Choi </h1>
        <a href="/projects" className="project-link slide_down">
          View Projects
        </a>
      </div>
      <div className="sidebar">
        <a className="linkedin" target="_blank">
          LinkedIn
        </a>
        <a className="github" target="_blank">
          Github
        </a>
        <a className="medium" target="_blank">
          Medium
        </a>
        <a className="contact" target="_blank">
          Contact
        </a>
        <a className="resume" target="_blank">
          Resume
        </a>
      </div>
      <footer className="footer">foot</footer>
    </div>
  );
}
