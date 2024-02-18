import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css'
import { TfiWrite } from "react-icons/tfi";
import { FaEllipsisVertical } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {/* Add buttons and other fields here */}
      <div className="align-space-between">
        <div className="input-group">
            <div className="form-outline" data-mdb-input-init>
                <input type="search" id="form1" className="form-control" placeholder="Search for Assignment"/>
            </div>
        </div>
        <div className="align-at-end" style={{ gap: '3px' }}>
            <div className="assignments-menu-button light-gray-bg">+Group</div>
            <div className="assignments-menu-button red-bg">+Assignment</div>
            <div className="assignments-menu-button light-gray-bg" style={{ padding: '4px 5px' }}>
            <FaEllipsisVertical />
            </div>
        </div>
      </div>
      <hr />
      <div className="wd-assignment-container">
          <div className="wd-assignment-header light-gray-bg">
            <FaEllipsisV className="me-2"/> <span className="weight-600">ASSIGNMENTS</span>
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <div>
            {assignmentList.map((assignment) => (
              <div className="wd-assignment-item align-space-between">
                <div className="align-at-start">
                    <FaEllipsisV className="me-2" />
                    <TfiWrite className="me-3 text-success" />
                    <div className="wd-assignment-description">
                        <Link className="wd-assignment-name weight-600"
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                        <div className="wd-assignments-subinformation">
                            <span className="red-color weight-500">Multiple Modules</span> <span className="ms-1 me-1">|</span> 
                            <span> <span className="weight-600">Due</span> Sep 18 at 11:59pm <span className="ms-1 me-1">|</span>  100 pts</span>
                        </div>
                    </div>
                </div>
                <div className="align-at-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></div>
              </div>))}
          </div>
        </div>
    </>
);}
export default Assignments;