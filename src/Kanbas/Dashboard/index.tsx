import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import './index.css'
import { FaTimes } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";

function Dashboard({ kanbasCourses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        kanbasCourses: Array<{ _id: string; name: string; number: string; startDate: string; endDate: string; image: string }>;
        course: { _id: string; name: string; number: string; startDate: string; endDate: string; image: string };
        setCourse: (course: { _id: string; name: string; number: string; startDate: string; endDate: string; image: string}) => void;
        addNewCourse: (event: React.MouseEvent<HTMLButtonElement>) => void;
        deleteCourse: (courseId: string) => void;
        updateCourse: (event: React.MouseEvent<HTMLButtonElement>) => void;
    }
  ) {
    const zeroMargin = {
        marginTop: '0px'
    };
    
  return (
    <div className="p-4">
      <h1 className="d-none d-sm-block">Dashboard</h1> 
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>
      <hr className="d-none d-sm-block" />

      <h3 className="d-none d-sm-block">Published Courses (7)</h3> 
      <div className="align-at-end">
        <FaEllipsisVertical className="d-block d-sm-none"/>
      </div> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4" style={ zeroMargin }>
          {kanbasCourses.map((course) => (
            <div key={course._id} className="col" id="dashboard-card">
              <div className="card">
                {/* <div className="edit-delete-buttons">
                    <button type="button" className="db-edit-course-button">
                        <MdOutlineModeEdit />
                    </button>
                    <button type="button" className="db-delete-course-button">
                        <FaTimes />
                    </button>
                </div> */}
                <img src={course.image} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title align-at-start" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold", gap: "10px" }}>
                    {course.number} 01 FA23
                    <div style={{display: "flex", gap: "5px"}}>
                        <button className="db-edit-course-button" onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                    <MdOutlineModeEdit />
                        </button>
                        <button className="db-delete-course-button" onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}>
                                    <FaTimes />
                        </button>
                    </div>
                  </Link>

                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;