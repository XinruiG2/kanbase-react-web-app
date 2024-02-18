import React from 'react'
import './index.css'
import { MdMenu } from "react-icons/md";
import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaInbox,
    FaRegClock,
    FaRegQuestionCircle,
    FaTimes,
    FaCaretDown,
    FaHome,
    FaFileSignature,
    FaFolder,
    FaClipboardList,
    FaDotCircle
  } from 'react-icons/fa';
  import { PiVideoDuotone } from 'react-icons/pi';
  import { FaArrowRightFromBracket, FaGear } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { IoGitNetwork, IoRocket, IoPeople, IoMegaphone } from "react-icons/io5";
import { LuPlug2, LuBookMarked } from "react-icons/lu";
import { GoCommentDiscussion } from "react-icons/go";
import { FiTarget } from "react-icons/fi";

const CourseMobileMenu = () => {

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

    const courseLinks = [
        { label: "Home",   icon: <FaHome className="fs-2 red-icon" />  },
        { label: "Modules", icon: <IoGitNetwork className="fs-2 red-icon" />  },
        { label: "Piazza",   icon: <LuPlug2 className="fs-2 red-icon" />           },
        { label: "Zoom Meetings",  icon: <LuPlug2 className="fs-2 red-icon" /> },
        { label: "Assignments",  icon: <FaFileSignature className="fs-2 red-icon" /> },
        { label: "Quizzes",  icon: <IoRocket className="fs-2 red-icon" /> },
        { label: "Grades",  icon: <LuBookMarked className="fs-2 red-icon" /> },
        { label: "People",  icon: <IoPeople className="fs-2 red-icon" /> },
        { label: "Panopto Video",  icon: <LuPlug2 className="fs-2 red-icon" /> },
        { label: "Discussions",  icon: <GoCommentDiscussion className="fs-2 red-icon" /> },
        { label: "Announcements",  icon: <IoMegaphone className="fs-2 red-icon" /> },
        { label: "Pages",  icon: <FaFileSignature className="fs-2 red-icon" /> },
        { label: "Files",  icon: <FaFolder className="fs-2 red-icon" /> },
        { label: "Rubrics",  icon: <FaClipboardList className="fs-2 red-icon" /> },
        { label: "Outcomes",  icon: <FiTarget className="fs-2 red-icon" /> },
        { label: "Collaborations",  icon: <FaDotCircle className="fs-2 red-icon" /> },
        { label: "Syllabus",  icon: <LuPlug2 className="fs-2 red-icon" /> },
        { label: "Settings",  icon: <FaGear className="fs-2 red-icon" /> }
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
                menu.style.height = '0px';
            } else {
                menu.style.height = '66%';
            }
        }
    }

    const location = useLocation();
    
    const getNewPath = () => {
        const pathname = location.pathname;
        const lastSlashIndex = pathname.lastIndexOf('/');
        const newPath = pathname.substring(0, lastSlashIndex) + '/';
        return newPath;
    };

  return (
    <div>
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
                <div>CS4550.39591.202430</div>
                <div>Modules</div>
            </div>
            <FaCaretDown className="fas fa-solid fa-caret-down wd-home-navbar-expand" onClick={toggleCourseNavigation}/>
        </div>

        <div id="partPageMenu" className="d-flex d-sm-none menu-vertical-hidden">
            {courseLinks.map((link, index) => (
                <li key={index}>
                    <Link className="menuLink" to={getNewPath() + link.label} onClick={toggleCourseNavigation}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </div>
    </div>
  )
}

export default CourseMobileMenu