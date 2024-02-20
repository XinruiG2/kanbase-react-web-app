import React from 'react'
import './index.css'
import Modules from '../Modules'
import { FaTimes, FaChartBar, FaRegBell } from "react-icons/fa";
import { FaFileImport, FaArrowRightFromBracket } from "react-icons/fa6";
import { SlTarget } from "react-icons/sl";
import { IoMegaphone } from "react-icons/io5";
import { todos } from '../../Database';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

interface TodoItem {
    _id: string;
    title: string;
    scale: string;
    dueDate: string;
    dueTime: string;
    course: string;
}

const Home = () => {
    const { courseId } = useParams();
    const [courseToDos, setCourseToDos] = useState<TodoItem[]>([]);

    useEffect(() => {
        const newCourseToDos: TodoItem[] = todos.filter(todo => todo.course === courseId);
        setCourseToDos(newCourseToDos);
    }, [courseId]);

    const defaultToDo = {
        "_id": "101",
        "title": "default",
        "scale": "100",
        "dueDate": "Jan 1",
        "dueTime": "11:59",
        "course": "Def101"
    }

    let todoOne = defaultToDo
    let todoTwo = defaultToDo

    if (courseToDos.length === 2) {
        todoOne = courseToDos[0];
        todoTwo = courseToDos[1];
    }

  return (
    <div className="home-container">
        <Modules />
        <div className="home-status-container d-none d-lg-block">
            <div className="home-status-options">
                <div className="custom-home-button light-gray-bg align-at-start">
                    <FaFileImport />
                    Import Existing Content
                </div>
                <div className="custom-home-button light-gray-bg align-at-start">
                    <FaArrowRightFromBracket />
                    Import from Commons
                </div>
                <div className="custom-home-button light-gray-bg align-at-start">
                    <SlTarget />
                    Choose Home Page
                </div>
                <div className="custom-home-button light-gray-bg align-at-start">
                    <FaChartBar />
                    View Course Stream
                </div>
                <div className="custom-home-button light-gray-bg align-at-start">
                    <IoMegaphone />
                    New Announcement
                </div>
                <div className="custom-home-button light-gray-bg align-at-start">
                    <FaChartBar />
                    New Analytics
                </div>
                <div className="custom-home-button light-gray-bg align-at-start">
                    <FaRegBell />
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
                                {todoOne.title}
                            </div>
                            <div className="task-description">
                                {todoOne.scale} points • {todoOne.dueDate} at {todoOne.dueTime}
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
                                {todoTwo.title}
                            </div>
                            <div className="task-description">
                                {todoTwo.scale} points • {todoTwo.dueDate} at {todoTwo.dueTime}
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