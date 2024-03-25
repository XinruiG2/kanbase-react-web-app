import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";
import Courses from "./Courses";
import Account from "./Account";
// import { courses } from "./Database";
import { useState, useEffect } from "react";
import axios from 'axios';
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const { pathname } = useLocation();
    const API_BASE = process.env.REACT_APP_API_BASE;
    console.log(API_BASE);

    const [kanbasCourses, setKanbasCourses] = useState<any[]>([]);
    // const COURSES_API = "https://kanbas-node-server-app-emy8.onrender.com/api/courses";
    const COURSES_API = `${API_BASE}/api/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(COURSES_API);
        setKanbasCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "../../images/gray.png"
    });

    const addNewCourse = async () => {
        try {
            const response = await axios.post(COURSES_API, course);
            setKanbasCourses([ ...kanbasCourses, response.data ]);
        } catch (err) {
            console.log("error: " + err);
            console.log(JSON.stringify(course));
        }
        
        // const newCourse = { ...course,
        //                     _id: new Date().getTime().toString() };
        // setKanbasCourses([...kanbasCourses, { ...course, ...newCourse }]);
    };
    
    // const deleteCourse = (courseId: string) => {
    //     setKanbasCourses(kanbasCourses.filter((course) => course._id !== courseId));
    // };    
    const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(
          `${COURSES_API}/${courseId}`
        );
        setKanbasCourses(kanbasCourses.filter(
          (c) => c._id !== courseId));
    };    

    const updateCourse = async () => {
        const response = await axios.put(
          `${COURSES_API}/${course._id}`,
          course
        );
        setKanbasCourses(
          kanbasCourses.map((c) => {
            if (c._id === course._id) {
              return course;
            }
            return c;
          })
        );
    };       

    return(
        <Provider store={store}>
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
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
        </div>  
      </Provider>
    );
 }
 export default Kanbas