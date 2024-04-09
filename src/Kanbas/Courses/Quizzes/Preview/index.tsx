import React, {useState, useEffect, Dispatch, SetStateAction} from 'react'
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import * as client from "../client";
import { KanbasState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { setQuiz, updateQuiz } from "../quizzesReducer";
import { RiErrorWarningLine } from "react-icons/ri";
import './index.css';

interface Answer {
    _id: string;
    answerText: string;
    correctOrNot: boolean;
}

interface Question {
    _id: string;
    title: string;
    type: string;
    points: number;
    description: string;
    answers: Answer[];
}

const Preview = () => {
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

    function formatCurrentDateTime() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const now = new Date();
        const month = months[now.getMonth()];
        const date = now.getDate();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
      
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const minutesPadded = minutes < 10 ? '0'+minutes : minutes;
      
        return `${month} ${date} at ${hours}:${minutesPadded}${ampm.toLowerCase()}`;
    }

  return (
    <div>
        <h2>{quiz.title}</h2>
        <div className="quiz-warning">
            <RiErrorWarningLine /> This is a preview of the published version of the quiz
        </div>
        Started: {formatCurrentDateTime()}

        <h2 style={{marginTop: "20px"}}>Quiz Instructions</h2>
        <p>{quiz.description}</p> <hr/>

        {quiz.questions.map((question: Question) => (
            <div>
                {question.title}
                {question.points}
                {question.description}
                {question.answers.map((answer: Answer) => (
                    <span><input type="radio" /> {answer.answerText}</span>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Preview