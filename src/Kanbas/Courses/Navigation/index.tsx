import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Grades", "Quizzes",
                 "People", "Zoom", "Discussions", "Announcements", "Panopto Video", "Pages",
                 "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation d-none d-sm-block">
      {links.map((link, index) => (
        <li key={index}>
          <Link className={pathname.includes(link) ? "wd-active" : ""} to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;