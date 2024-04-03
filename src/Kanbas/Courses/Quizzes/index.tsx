import React, { useEffect, useState } from 'react';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaTimes } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlineStop } from "react-icons/ai";
import './index.css'
import { Link, useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import {
    addQuiz,
    deleteQuiz,
    updateQuiz,
    setQuiz,
    setQuizzes,
  } from "./quizzesReducer";
  import * as client from "./client";
  import { KanbasState } from "../../store";
  import { useSelector, useDispatch } from "react-redux";

const Quizzes = () => {
    function formatDate(dateString: any) {
        const parts = dateString.split("-");
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
        const day = parseInt(parts[2], 10);

        const newDate = new Date(year, month, day);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthName = months[newDate.getMonth()];
        const dayNum = newDate.getDate();

        return `${monthName} ${dayNum}`;
    }

    function getAvailability(quiz: any) {
        const currentDate = new Date();
        const notAvailableUntilDate = new Date(quiz.notAvailableUntil);
        const availableUntilDate = new Date(quiz.availableUntil);

        if (currentDate < notAvailableUntilDate) {
            return `Not available until ${formatDate(quiz.notAvailableUntil)}`;
        } else if (currentDate >= notAvailableUntilDate && currentDate <= availableUntilDate) {
            return `Available until ${formatDate(quiz.availableUntil)}`;
        } else {
            return "Closed";
        }
    }

    const { courseId } = useParams();
    const dispatch = useDispatch();
    const quizList = useSelector((state: KanbasState) => 
        state.quizzesReducer.quizzes);
    const quiz = useSelector((state: KanbasState) => 
        state.quizzesReducer.quiz);

    useEffect(() => {
        client.findQuizzesForCourse(courseId)
        .then((quizzes) =>
            dispatch(setQuizzes(quizzes))
        );
    }, [courseId]);

    const handleAddQuiz = () => {
        console.log("in here");
        client.createQuiz(courseId, quiz).then((quiz) => {
          dispatch(addQuiz(quiz));
        });
    };

    const handleDeleteQuiz = (quizId: string) => {
        client.deleteQuiz(quizId).then((status) => {
          dispatch(deleteQuiz(quizId));
        });
    };

    const handlePublishQuiz = async (quiz: any) => {
        dispatch(setQuiz(quiz));
        const status = await client.publishQuiz(quiz);
        dispatch(updateQuiz(quiz));
        console.log(quiz);
    };

  return (
    <div>
        <div className="align-space-between">
            <input type="text" placeholder='Search for Quiz' className="search-for-quiz-box"/>
            <div className="align-end">
                <button type="button" className="quiz-add-button"
                        onClick={handleAddQuiz}>
                            + Quiz
                </button>
                <button type="button" className="quiz-ellips-button">
                    <FaEllipsisVertical />
                </button>
            </div>
        </div>
        <hr />
        <div className="quizzes-title-header light-gray-bg">
                <button className="d-inline-flex align-items-center quizzes-visiblity-button"
                    style={{ marginRight: "3px" }}>
                    <GoTriangleDown />
                </button>
                Assignments Quizzes
        </div>
                { quizList.map((quiz: any) => (
                  <div className="quizzes-quiz-item">
                    <div className="align-at-start">
                        <IoRocketOutline className="text-success rocket-icon" style={{ marginRight: "17px" }}/>
                        <div className="quiz-description align-at-start" style={{flexDirection: "column", alignItems: "start"}}>
                            <div className="quiz-title">{quiz.title}</div>
                            <div className="quiz-mini-description">
                                <b>{getAvailability(quiz)}</b><span className="description-separator">|</span> 
                                <b>Due</b> {formatDate(quiz.dueDate)} at {quiz.dueTime}<span className="description-separator">|</span> 
                                {quiz.numPoints} pts<span className="description-separator">|</span> 
                                {quiz.numQuestions} Questions
                            </div>
                        </div>
                    </div>
                    <div className="align-end">
                      {quiz.published ? <FaCheckCircle className="text-success" /> : <AiOutlineStop />}
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <FaEllipsisV style={{ color: "black", marginTop: "-3px" }}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <button className="no-bg">
                                <Link className="wd-assignment-name weight-600"
                                    to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/details`}
                                    style={{fontWeight: 500}}>Edit</Link>
                                </button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <button 
                                    className="no-bg"
                                    onClick={() => handleDeleteQuiz(quiz._id)}>Delete</button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <button 
                                    className="no-bg"
                                    onClick={() => handlePublishQuiz(quiz)}>
                                    {quiz.published ? "Unpublish" : "Publish"}
                                </button>
                            </Dropdown.Item>
                            <Dropdown.Item><button className="no-bg">Copy</button></Dropdown.Item>
                            <Dropdown.Item><button className="no-bg">Sort</button></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                  </div>
                ))}
    </div>
  )
}

export default Quizzes