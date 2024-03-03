import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";
import Courses from "./Courses";
import Account from "./Account";
import { courses } from "./Database";
import { useState } from "react";

function Kanbas() {
    const { pathname } = useLocation();

    const [kanbasCourses, setKanbasCourses] = useState(courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "../../images/gray.png"
    });

    const addNewCourse = () => {
        const newCourse = { ...course,
                            _id: new Date().getTime().toString() };
        setKanbasCourses([...kanbasCourses, { ...course, ...newCourse }]);
    };
    
    const deleteCourse = (courseId: string) => {
        setKanbasCourses(kanbasCourses.filter((course) => course._id !== courseId));
    };    

    const updateCourse = () => {
        setKanbasCourses(
          kanbasCourses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })
        );
    };    

    return(
        <div className="d-block d-sm-flex">
        <KanbasNavigation />
        {(pathname.includes("Dashboard") || pathname.includes("Account")) && <MobileMenu />}
        <div style={{ flexGrow: 1 }} className='main-content'>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account/*" element={<Account />} />
                <Route path="Dashboard" element=
                    {<Dashboard
                        kanbasCourses={kanbasCourses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}  />} />
                <Route path="Courses/:courseId/*" element={<Courses courses={kanbasCourses} />} />
            </Routes>
        </div>
      </div>  
    );
 }
 export default Kanbas