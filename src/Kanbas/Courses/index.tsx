import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import './index.css'
import CourseNavigation from "./Navigation";
import Modules from "./Modules";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split('/');
  const lastSegment = segments.pop();

  return (
    <div className="p-4">
        <div className="align-at-start course-header">
            <HiMiniBars3 />
            <div className="course-header-description">
                Course {course?.name} <span className="gray-color">&gt;</span> 
                <span className="black-color"> {lastSegment}</span>
            </div>
        </div> <hr />
        <div className="align-at-start" style={{ alignItems: 'start', gap: '15px' }}>
            <CourseNavigation />
            <div style={{ width: '100%' }}>
                <div className="overflow-y-scroll">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<div>Home</div>} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<div>Piazza</div>} />
                    <Route path="Assignments" element={<div>Assignments</div>} />
                    <Route path="Assignments/:assignmentId" element={<div>Assignment Edit</div>} />
                    <Route path="Grades" element={<div>Grades</div>} />
                    <Route path="Quizzes" element={<div>Quizzes</div>} />
                    <Route path="People" element={<div>People</div>} />
                    <Route path="Zoom" element={<div>Zoom</div>} />
                    <Route path="Discussions" element={<div>Discussions</div>} />
                    <Route path="Announcements" element={<div>Announcements</div>} />
                    <Route path="Panopto Video" element={<div>Panopto Video</div>} />
                    <Route path="Pages" element={<div>Pages</div>} />
                    <Route path="Files" element={<div>Files</div>} />
                    <Route path="Rubrics" element={<div>Rubrics</div>} />
                    <Route path="Outcomes" element={<div>Outcomes</div>} />
                    <Route path="Collaborations" element={<div>Collaborations</div>} />
                    <Route path="Syllabus" element={<div>Syllabus</div>} />
                    <Route path="Settings" element={<div>Settings</div>} />
                </Routes>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Courses;