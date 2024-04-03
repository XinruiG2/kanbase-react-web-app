import React, {useState, useEffect, Dispatch, SetStateAction} from 'react'
import { Link, useParams } from "react-router-dom";
import * as client from "../client";
import { KanbasState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../quizzesReducer";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import '../../../../index.css';
import Dropdown from 'react-bootstrap/Dropdown';

const QuizzesEdit = () => {
    const { quizId } = useParams();
    const dispatch = useDispatch();
    const quiz = useSelector((state: KanbasState) => 
        state.quizzesReducer.quiz);
    const [showDetails, setShowDetails] = useState(true);
    const [showQuestions, setShowQuestions] = useState(false);

    useEffect(() => {
        client.findSpecificQuiz(quizId)
        .then((quiz) => {
            dispatch(setQuiz(quiz));
        });
        console.log(quiz);
    }, [quizId]);

    function clickOnQuestions() {
        setShowQuestions(true);
        setShowDetails(false);
    }

    function clickOnDetails() {
        setShowQuestions(false);
        setShowDetails(true);
    }

    const [quizTitle, setQuizTitle] = useState(quiz.title);

  return (
    <div>
        <div className="align-at-end" style={{gap: "12px"}}>
            <div style={{fontSize: "0.9rem", color: "rgb(80, 80, 80)"}}>
                {quiz.published ? <span><FaCheckCircle /> Published</span> : <span><AiOutlineStop /> Not Published</span>}
            </div>
            <button className="basic-button"><FaEllipsisV /></button>
        </div>
        <hr />
        <div className="quiz-edit-navbar align-at-start"
             style={{gap: "30px"}}>
            <div style={{ color: showDetails ? 'rgb(212,26,44)' : 'black', fontWeight: 500}}
                 className="cursor-change-on-hover"
                 onClick={clickOnDetails} >
                Details
            </div>
            <div style={{ color: showQuestions ? 'rgb(212,26,44)' : 'black', fontWeight: 500 }}
                 className="cursor-change-on-hover"
                 onClick={clickOnQuestions} >
                Questions
            </div>
        </div> <hr />

        <input 
            type="text"
            value={quizTitle} 
            placeholder="Quiz Title"
            onChange={(e) => setQuizTitle(e.target.value)}
            style={{border: "1px solid lightgray", borderRadius: "5px", fontSize: "0.87rem", padding: "5px 8px", width: "330px"}}/>
            <br/><br/>

        <label style={{fontSize: "0.9rem", marginBottom: "5px", fontWeight: 500}} htmlFor="quiz-description">
            Quiz Description:
        </label>
        <textarea className="form-control" style={{fontSize: "0.9rem"}}
                rows={4} cols={30} id="quiz-description"></textarea> <br/>

        <label htmlFor="quiz-type" style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}>Quiz Type:</label>
        <select id="quiz-type" 
            style={{fontSize: "0.87rem", padding: "3px 30px 3px 1px", marginBottom: "10px"}}>
            <option selected>Graded Quiz</option>
            <option>Practice Quiz</option>
            <option>Graded Survey</option>
            <option>Ungraded Survey</option>
        </select> <br/>

        <label htmlFor="assignment-group" style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}>
            Assignment Group:
        </label>
        <select id="assignment-group" style={{fontSize: "0.87rem", padding: "3px 30px 3px 1px"}}>
            <option selected>Quizzes</option>
            <option>Exams</option>
            <option>Assignments</option>
            <option>Project</option>
        </select> <br/>
    </div>
  )
}

export default QuizzesEdit