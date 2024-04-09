import { createSlice } from "@reduxjs/toolkit";

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

interface Quiz {
    title: string;
    description: string;
    dueDate: string;
    dueTime: string;
    _id?: string;
    course: string;
    status: boolean;
    numQuestions: number;
    numPoints: number;
    published: boolean;
    assignmentType: string;
    group: string;
    shuffleAnswers: boolean;
    timeLimit: number;
    multipleAttempts: boolean;
    showAnswers: boolean;
    whenToShowAnswers: string;
    accessCode: string;
    oneAtTime: boolean;
    camRequired: boolean;
    lockAfter: boolean;
    questions: Question[];
 }

const initialState = {
  quizzes: [] as Quiz[],
  quiz: { 
    title: "Default Quiz", 
    description: "",
    dueDate: "2025-01-05",
    availableUntil: "2025-01-05",
    notAvailableUntil: "2025-01-01",
    dueTime: "1pm",
    status: false,
    numQuestions: 10,
    numPoints: 10,
    published: false,
    assignmentType: "Graded Quiz",
    group: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    showAnswers: true,
    whenToShowAnswers: "Immediately",
    accessCode: "",
    oneAtTime: true,
    camRequired: false,
    lockAfter: false, 
    questions: [], },
};

const quizzesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
        state.quizzes = action.payload;
    },  
    addQuiz: (state, action) => {
      state.quizzes = [
          action.payload,
          ...state.quizzes,
      ];
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (module) => module._id !== action.payload
      );
    },
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
  },
});


export const { addQuiz, deleteQuiz,
  updateQuiz, setQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;