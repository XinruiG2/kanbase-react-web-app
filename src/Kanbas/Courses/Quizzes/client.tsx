import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

export const publishQuiz = async (quiz: any) => {
    const quizStatus = !quiz.published;
    const newQuiz = { ...quiz, published: quizStatus };

    const response = await axios.
      put(`${QUIZZES_API}/${quiz._id}`, newQuiz);
    return response.data;
};  

export const createQuiz = async (courseId: any, module: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/quizzes`,
      module
    );
    return response.data;
};  

export const deleteQuiz = async (quizId: any) => {
    const response = await axios
      .delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
};

export const findQuizzesForCourse = async (courseId: any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

export const findSpecificQuiz = async (quizId: any) => {
    const response = await axios
      .get(`${QUIZZES_API}/${quizId}`);
    return response.data;
  };
