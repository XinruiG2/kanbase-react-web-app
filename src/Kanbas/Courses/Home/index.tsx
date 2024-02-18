import React from 'react'
import './index.css'
import Modules from '../Modules'
import { FaTimes } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
        <Modules />
        <div className="home-status-container d-none d-lg-block">
            <div className="home-status-options">
                <div className="custom-home-button light-gray-bg">
                    Import Existing Content
                </div>
                <div className="custom-home-button light-gray-bg">
                    Import from Commons
                </div>
                <div className="custom-home-button light-gray-bg">
                    Choose Home Page
                </div>
                <div className="custom-home-button light-gray-bg">
                    View Course Stream
                </div>
                <div className="custom-home-button light-gray-bg">
                    New Announcement
                </div>
                <div className="custom-home-button light-gray-bg">
                    New Analytics
                </div>
                <div className="custom-home-button light-gray-bg">
                    View Course Notifications
                </div>
            </div>

            <div className="home-status-tasks">
                <div className="todo-header">
                    To Do
                </div> <hr className="home-status-hr"/>

                <div className="todo-task-container">
                    <div style={{ display: 'flex', gap: '8px'}}>
                        <div className="circular-bg">5</div>
                        <div className="todo-task-description">
                            <div className="task-title red-color">
                                Grade A1 - ENV + HTML
                            </div>
                            <div className="task-description">
                                100 points • Sep 18 at 11:59pm
                            </div>
                        </div>
                    </div>
                    <FaTimes id="home-task-exit-icon"/>
                </div>

                <div className="todo-task-container">
                    <div style={{ display: 'flex', gap: '8px'}}>
                        <div className="circular-bg">5</div>
                        <div className="todo-task-description">
                            <div className="task-title red-color">
                                Grade A2 - CSS + BOOTSTRAP
                            </div>
                            <div className="task-description">
                                100 points • Oct 2 at 11:59pm
                            </div>
                        </div>
                    </div>
                    <FaTimes id="home-task-exit-icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home