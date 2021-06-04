import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

import ".././css/home.css";
export default function Home() {
  return (
    <div className=" parent-grid">
      <div className="name-container">
        <h1 className="name"> Matthew Choi </h1>
        <a href="/projects" className="project-link slide_down">
          View Projects
        </a>
      </div>
      <Sidebar />
    </div>
  );
}
