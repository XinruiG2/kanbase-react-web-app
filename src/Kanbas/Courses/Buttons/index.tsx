import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './index.css'
import { FaRegCheckCircle } from "react-icons/fa";

const CourseButtons = () => {
  return (
    <div className="align-at-end" style={{ gap: '4px' }}>
        <div className="course-menu-button light-gray-bg">Collapse All</div>
        <div className="course-menu-button light-gray-bg">View Progress</div>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components">
                <FaRegCheckCircle className="text-success" style={{ marginRight: '3px' }} />
                Publish All
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div className="course-menu-button red-bg">+ Module</div>
        <div className="course-menu-button light-gray-bg" style={{ padding: '4px 5px' }}>
            <FaEllipsisVertical />
        </div>
    </div>
  )
}

export default CourseButtons