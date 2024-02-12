import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, 
         FaInbox, FaRegClock, FaRegQuestionCircle } from "react-icons/fa";
import { PiVideoDuotone } from "react-icons/pi";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function KanbasNavigation() {
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
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        <li className="nav-logo"><img src="/images/neu.jpg"/></li>
        {links.map((link, index) => (
            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                <Link to={`/Kanbas/${link.label}`}> {link.icon}<br/>{link.label} </Link>
            </li>
        ))}
    </ul>
  );
}
export default KanbasNavigation;