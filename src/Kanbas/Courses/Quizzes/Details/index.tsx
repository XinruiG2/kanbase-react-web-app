import React, {useState, useEffect, Dispatch, SetStateAction} from 'react'
import { Link, useParams } from "react-router-dom";
import * as client from "../client";
import { KanbasState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../quizzesReducer";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import '../../../../index.css'
import './index.css'

  const QuizzesDetails = () => {
    const { quizId } = useParams();
    const dispatch = useDispatch();
    const quiz = useSelector((state: KanbasState) => 
        state.quizzesReducer.quiz);

    useEffect(() => {
        client.findSpecificQuiz(quizId)
        .then((quiz) => {
            dispatch(setQuiz(quiz));
        });
        console.log(quiz);
    }, [quizId]);

    function formatDate(dateString: any) {
        console.log(dateString);
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

  return (
    <div>
        <div className="align-at-end" style={{gap: "5px"}}>
            <button className="basic-button bg-success text-white">
                {quiz.published ? <span><FaCheckCircle /> Published</span> : <span><AiOutlineStop /> Not Published</span>}
            </button>
            <button className="basic-button">Preview</button>
            <button className="basic-button">Edit</button>
            <button className="basic-button"><FaEllipsisV /></button>
        </div>
        <hr />
        
        <h3 style={{marginBottom: "23px"}}>{quiz.title}</h3>
        <div className="quiz-details-grid" style={{marginBottom: "40px"}}>
            <div className="quiz-details-topics">
                <div>Quiz Type</div>
                <div>Points</div>
                <div>Assignment Group</div>
                <div>Shuffle Answers</div>
                <div>Time Limit</div>
                <div>Multiple Attempts</div>
                <div>View Responses</div>
                <div>Show Correct Answers</div>
                <div>One Question at a Time</div>
                <div>Require Respondus LockDown Browser</div>
                <div>Required to View Quiz Results</div>
                <div>Webcam Required</div>
                <div>Lock Questions After Answering</div>
            </div>  
            <div className="quiz-details-specifics">
                <div>Graded Quiz</div>
                <div>{quiz.numPoints}</div>
                <div>QUIZZES</div>
                <div>No</div>
                <div>30 Minutes</div>
                <div>No</div>
                <div>Always</div>
                <div>Immediately</div>
                <div>Yes</div>
                <div>No</div>
                <div>No</div>
                <div>No</div>
                <div>No</div>
            </div>
        </div>

        <div className="four-column-grid">
            <div>Due</div>
            <div>For</div>
            <div>Available from</div>
            <div>Until</div>
        </div> <hr style={{ marginTop: "8px", marginBottom: "10px"}}/>
        <div className="four-column-grid">
            <div>{formatDate(quiz.dueDate)} at {quiz.dueTime}</div>
            <div>Everyone</div>
            <div>{formatDate(quiz.notAvailableUntil)} at 11:30am</div>
            <div>{formatDate(quiz.availableUntil)} at {quiz.dueTime}</div>
        </div> <hr style={{ marginTop: "11px", marginBottom: "8px"}}/>
    </div>
  )
}

export default QuizzesDetails