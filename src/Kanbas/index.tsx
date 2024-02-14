import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";
import Courses from "./Courses";

function Kanbas() {
    const { pathname } = useLocation();

    return(
        <div className="d-block d-sm-flex">
        <KanbasNavigation />
        {pathname.includes("Dashboard") && <MobileMenu />}
        <div style={{ flexGrow: 1 }} className='main-content'>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
        </div>
      </div>  
    );
 }
 export default Kanbas