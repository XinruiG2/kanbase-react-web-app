import React, {useState, useEffect, Dispatch, SetStateAction} from 'react'
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import * as client from "../client";
import { KanbasState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz } from "../quizzesReducer";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import '../../../../index.css';
import './index.css'
import { FaM, FaMagnifyingGlass } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';

const QuizzesEdit = () => {
    const { quizId } = useParams();
    const dispatch = useDispatch();
    const quiz = useSelector((state: KanbasState) => 
        state.quizzesReducer.quiz);
    const [showDetails, setShowDetails] = useState(true);
    const [showQuestions, setShowQuestions] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [showMCEditor, setShowMCEditor] = useState(false);
    const [showTFEditor, setShowTFEditor] = useState(false);
    const [showBlanksEditor, setShowBlanksEditor] = useState(false);
    const [showQuestionEditor, setShowQuestionEditor] = useState(false);
    const [questionType, setQuestionType] = useState("Question Type");

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

    function clickOnSave() {
        const pathSegments = location.pathname.split('/');
        pathSegments[pathSegments.length - 1] = 'details';
        const newPath = pathSegments.join('/');
        navigate(newPath);
    }

    function clickOnCancelOrSaveAndPublish() {
        const pathSegments = location.pathname.split('/');
        const newPathSegments = pathSegments.slice(0, -2);
        const newPath = newPathSegments.join('/');
        navigate(newPath);
    }

    function addNewQuestion() {
        setShowQuestionEditor(true);
    }

    function showMC() {
        setShowMCEditor(true);
        setShowTFEditor(false);
        setShowBlanksEditor(false);
        setQuestionType("Multiple Choice");
    }

    function showTF() {
        setShowMCEditor(false);
        setShowTFEditor(true);
        setShowBlanksEditor(false);
        setQuestionType("True/False");
    }

    function showBlanks() {
        setShowMCEditor(false);
        setShowTFEditor(false);
        setShowBlanksEditor(true);
        setQuestionType("Fill In the Blank");
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
        {showDetails && <div>
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
            </select> <br/><br/>
            
            <label htmlFor="access-code" style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}>Access Code:</label>
            <input type="text" className="form-control" id="access-code" />
            <br/>

            <h5>Options</h5>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="checkbox" checked/> Shuffle Answers</label><br/>
            <label style={{marginRight: "15px", fontSize: "0.9rem", fontWeight: 500}}><input type="checkbox"/> Time Limit</label>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="number" style={{width: "60px"}} value={20}/> Minutes</label><br/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="checkbox"/> Allow Multiple Attempts</label><br/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="number" style={{width: "60px"}}/> Points</label><br/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="checkbox"/> Show Correct Answers</label><br/>
            <div style={{marginLeft: "25px"}}>
                <label style={{marginRight: "15px", fontSize: "0.9rem", fontWeight: 500 }}><input type="checkbox"/> Immediately After</label>
                <div>OR</div>
                <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="date"/> By a certain Date</label>
            </div>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="checkbox" checked/> One Question at a Time</label><br/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="checkbox"/> Webcam Required</label><br/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}}><input type="checkbox"/> Lock Questions After Answering</label><br/>
            <br/>

            <h5>
                Assign
            </h5>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} htmlFor="assign-to-who">Assign to</label> <br/>
            <input style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} id="assign-to-who" className="form-control" value="Everyone"/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} htmlFor="due-date">Due</label> <br/>
            <input style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} id="due-date" className="form-control" type="date"/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} htmlFor="available-from-date">Available from</label> <br/>
            <input style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} id="available-from-date" className="form-control" type="date"/>
            <label style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} htmlFor="until-date">Until</label> <br/>
            <input style={{fontSize: "0.9rem", fontWeight: 500, marginRight: "8px"}} id="until-date" className="form-control" type="date"/><br/>
            </div>}

            {showQuestions && 
            <div>
                <button className="basic-button" style={{marginRight: "7px"}} onClick={addNewQuestion}>
                    + New Question
                </button>
                <button className="basic-button" style={{marginRight: "7px"}}>+ New Question Group</button>
                <button className="basic-button"><FaMagnifyingGlass /> Find Questions</button><br/><br/>
                
                {showQuestionEditor &&
                <div className="questions-editor-wrapper">
                    <div className="align-at-start" style={{gap: "8px", borderBottom: "1px solid gray", padding: "2px 10px 15px 10px" }}>
                        <input placeholder="Question Title" className="form-control" />
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" 
                            style={{color: "black", border: "1px solid lightgray"}}>
                            {questionType}
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <button className="no-bg" onClick={showMC}> 
                                        Multiple Choice
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button 
                                        className="no-bg" onClick={showTF}>
                                            True/False
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button 
                                        className="no-bg" onClick={showBlanks}>
                                            Fill In the Blank
                                    </button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <label className="align-at-center" style={{marginLeft: "11px"}}>
                            pts: <input className="form-control" type="number" value={1} style={{ width: "55px", marginLeft: "5px"}}/>
                        </label>
                    </div>

                    <div style={{padding: "10px 10px 2px 10px"}}>
                        <div style={{marginBottom: "8px", fontSize: "0.9rem"}}>
                        {showMCEditor && "Enter your question and multiple answers, then select the one correct answer."}
                        {showTFEditor && "Enter your question text, then select if True or False is the correct answer."}
                        {showBlanksEditor && "Enter your question text, then define all possible correct answers for the blank."}
                        </div>

                        <label htmlFor="question-text" style={{fontSize: "1rem", fontWeight: 500}}>Question:</label><br/>
                        <textarea className="form-control" style={{fontSize: "0.9rem"}}
                            rows={4} cols={30} id="question-text"></textarea><br/>

                        <label htmlFor="answer-text" style={{fontSize: "1rem", fontWeight: 500}}>Answers:</label><br/>

                    </div>
                </div>}

            </div>}

            <hr/>
            <div className="align-at-end" style={{gap: "5px"}}>
                <button style={{fontSize: "0.9rem", fontWeight: "600"}} className="btn btn-secondary" onClick={clickOnCancelOrSaveAndPublish}>Cancel</button>
                <button style={{fontSize: "0.9rem", fontWeight: "600"}} className="btn btn-secondary" onClick={clickOnCancelOrSaveAndPublish}>Save & Publish</button>
                <button style={{fontSize: "0.9rem", fontWeight: "600"}} className="btn btn-danger" onClick={clickOnSave}>Save</button>
            </div>
            <hr/>
    </div>
  )
}

export default QuizzesEdit