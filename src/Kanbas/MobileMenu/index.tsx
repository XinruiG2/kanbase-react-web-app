import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaRegClock,
  FaRegQuestionCircle,
  FaTimes
} from 'react-icons/fa';
import { PiVideoDuotone } from 'react-icons/pi';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import './index.css'
import { MdMenu } from "react-icons/md";

const MobileMenu = () => {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 red-icon" />  },
        { label: "Courses",   icon: <FaBook className="fs-2 red-icon" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 red-icon" /> },
        { label: "Inbox",  icon: <FaInbox className="fs-2 red-icon" /> },
        { label: "History",  icon: <FaRegClock className="fs-2 red-icon" /> },
        { label: "Studio",  icon: <PiVideoDuotone className="fs-2 red-icon" /> },
        { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-2 red-icon" /> },
        { label: "Help",  icon: <FaRegQuestionCircle className="fs-2 red-icon" /> }
    ];

    function toggleKanbasNavigation() {
        var menu = document.getElementById("fullPageMenu");
        if (menu) {
          if (menu.style.width === '100%') {
            menu.style.width = '0';
          } else {
            menu.style.width = '100%';
          }
        }
      }
    
    function toggleCourseNavigation() {
        var menu = document.getElementById("partPageMenu");
        if (menu) {
          if (menu.style.height === '66%') {
            menu.style.height = '0';
          } else {
            menu.style.height = '66%';
          }
        }
    
        var icon = document.querySelector(".wd-home-navbar-expand");
        if (icon) {
          if (icon.classList.contains("fa-caret-down")) {
            icon.classList.remove("fa-caret-down");
            icon.classList.add("fa-times");
          } else {
            icon.classList.add("fa-caret-down");
            icon.classList.remove("fa-times");
          }
        }
    }

  return (
    <div className='list-styling'>
        <div id="fullPageMenu" className="d-flex d-sm-none menu-horizontal-hidden">
                <div className="menu-exit-container">
                    <FaTimes className="fas fa-times" onClick={toggleKanbasNavigation} />
                </div>
                <div>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link className="menuLink" to={`/Kanbas/${link.label}`} onClick={toggleKanbasNavigation}> {link.icon} {link.label} </Link>
                    </li>
                ))}
                </div>
        </div>

        <div className="d-flex d-sm-none wd-home-navbar">
                <MdMenu className="fas fa-solid fa-bars wd-home-navbar-menu" onClick={toggleKanbasNavigation} />
                <div className="wd-home-navbar-course">
                    <div>Dashboard</div>
                </div>
                <div></div>
        </div>
    </div>
  )
}

export default MobileMenu