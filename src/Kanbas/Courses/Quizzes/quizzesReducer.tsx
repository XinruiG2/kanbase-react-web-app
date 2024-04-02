import { createSlice } from "@reduxjs/toolkit";

interface Quiz {
    title: string;
    dueDate: string;
    dueTime: string;
    _id?: string;
    course: string;
    status: boolean;
    numQuestions: number;
    numPoints: number;
    published: boolean;
 }

const initialState = {
  quizzes: [] as Quiz[],
  quiz: { 
    title: "Default Quiz", 
    dueDate: "2025-01-05",
    availableUntil: "2025-01-05",
    notAvailableUntil: "2025-01-01",
    dueTime: "1pm",
    status: false,
    numQuestions: 10,
    numPoints: 10,
    published: false, },
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