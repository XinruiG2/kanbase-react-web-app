// import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import './index.css'
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Quizzes from "./Quizzes";
import AssignmentEdit from "./Assignments/Edit";
import CourseMobileMenu from "../CourseMobileMenu";
import Piazza from "./Piazza";
import QuizzesDetails from "./Quizzes/Details";
import { FaGlasses } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split('/');
  const lastSegment = segments.pop();

  function isNumeric(str: any) {
    return /^\d+(\.\d+)?$/.test(str);
  }

  function getPath() {
    if (isNumeric(lastSegment)) {
        const segmentBefore = segments.pop();
        return segmentBefore + " > " + lastSegment;
    } else {
        return lastSegment
    }
  }

  return (
    <div>
        <CourseMobileMenu />
        <div className="p-4">
        <div className="align-space-between d-none d-sm-flex">
            <div className="align-at-start course-header">
                <HiMiniBars3 />
                <div className="course-header-description">
                    {course?.number} 01 FA23 <span className="gray-color">&gt;</span> 
                    <span className="black-color"> {getPath()}</span>
                </div>
            </div>
            <div className="align-at-end d-none d-md-flex">
                <span className="student-view-button">
                    <FaGlasses style={{ marginRight: '4px' }}/>
                    Student-View
                </span>
            </div>
        </div> <hr className="d-none d-sm-block" />
        
        <div className="align-at-start" style={{ alignItems: 'start', gap: '15px' }}>
            <CourseNavigation />
            <div style={{ width: '100%' }}>
                <div className="">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<Piazza />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEdit />} />
                    <Route path="Grades" element={<div>Grades</div>} />
                    <Route path="Quizzes" element={<Quizzes />} />
                    <Route path="Quizzes/:quizId" element={<QuizzesDetails />} />
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
    </div>
  );
}
export default Courses;