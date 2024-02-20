import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import './index.css'
import { FaEllipsisVertical } from "react-icons/fa6";

function Dashboard() {
    const zeroMargin = {
        marginTop: '0px'
    };
    
  return (
    <div className="p-4">
      <h1 className="d-none d-sm-block">Dashboard</h1>              <hr className="d-none d-sm-block" />
      <h3 className="d-none d-sm-block">Published Courses (7)</h3> 
      <div className="align-at-end">
        <FaEllipsisVertical className="d-block d-sm-none"/>
      </div> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4" style={ zeroMargin }>
          {courses.map((course) => (
            <div key={course._id} className="col" id="dashboard-card">
              <div className="card">
                <img src={course.image} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.number} 01 FA23 </Link>
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